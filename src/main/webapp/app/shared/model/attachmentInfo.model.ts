import { TEXT_EMPTY } from 'app/config/constant/constants';

export interface IAttachmentInfo {
  fileId?: string;
  fileName?: string;
}

export const defaultValue: Readonly<IAttachmentInfo> = {
  fileId: TEXT_EMPTY,
  fileName: TEXT_EMPTY,
};
