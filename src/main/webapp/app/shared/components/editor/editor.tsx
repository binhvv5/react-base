import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import { apiClient } from 'app/config/client/api-client';
import { APT_POST_FILE, IMAGE_URL } from 'app/config/constant/api';
import { FILE, IMAGE_TYPES, OPTIONS } from 'app/config/constant/constants';
import { IFile } from 'app/shared/model/dto.model';
import imageCompression from 'browser-image-compression';
import React from 'react';

const FILE_REPOSITORY = 'FileRepository';
interface IEditorProps {
  content?: string;
  onFocus?: any;
  onBlur?: any;
  onChange?: any;
  onReady?: any;
  locked?: boolean;
}

const Editor = (props: IEditorProps) => {
  function uploadAdapter(loader: any) {
    return {
      upload() {
        return new Promise(resolve => {
          const body = new FormData();
          loader.file.then(async (file: any) => {
            const type = file?.type.split('/').pop().toLowerCase();
            if (IMAGE_TYPES.includes(type)) {
              file = await imageCompression(file, OPTIONS);
            }
            body.append(FILE, file);
            apiClient.post<IFile>(APT_POST_FILE, body).then(response => {
              resolve({
                default: `${IMAGE_URL}${response.data.fileId}`,
              });
            });
          });
        });
      },
    };
  }

  function uploadPlugin(editor: any) {
    editor.plugins.get(FILE_REPOSITORY).createUploadAdapter = (loader: any) => uploadAdapter(loader);
  }

  return (
    <>
      <CKEditor
        editor={ClassicEditor}
        data={props.content}
        disabled={props.locked}
        config={{
          extraPlugins: [uploadPlugin],
        }}
        onReady={props.onReady}
        onChange={(event: any, editor: any) => {
          const data = editor.getData();
          if (props.onChange) props.onChange(data);
        }}
        onBlur={props.onBlur}
        onFocus={props.onFocus}
      />
    </>
  );
};

export default Editor;
