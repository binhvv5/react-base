import { IFile } from 'app/shared/model/dto.model';
import { apiClient } from '../client/api-client';
import { APT_DELETE_FILE, APT_POST_FILE } from '../constant/api';
import { FILE, ID_FIELD, IMAGE_TYPES, OPTIONS } from '../constant/constants';
import imageCompression from 'browser-image-compression';

export const uploadFile = async (file: any) => {
  try {
    const type = file?.type.split('/').pop().toLowerCase();
    if (IMAGE_TYPES.includes(type)) {
      file = await imageCompression(file, OPTIONS);
    }
    const bodyFormData = new FormData();
    bodyFormData.append(FILE, file);
    const response = await apiClient.post<IFile>(APT_POST_FILE, bodyFormData);
    return response.data;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
    return null;
  }
};

export const deleteFile = async (id: string) => {
  const bodyFormData = new FormData();
  bodyFormData.append(ID_FIELD, id);
  return await apiClient.delete<string>(APT_DELETE_FILE, {
    data: bodyFormData,
  });
};

export function getBase64(file: any) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}
