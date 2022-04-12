import { TEXT_EMPTY } from 'app/config/constant/constants';
import { IFile, IFileDefaultValue } from 'app/shared/model/dto.model';
import { IUser } from 'app/shared/model/user.model';

export interface IResponsePaginationResidentNewsGroup {
  totalItems: number;
  currentPage: number;
  totalPages: number;
  items: IResidentNewsGroup[];
}

export interface IResidentNewsGroup {
  id?: string;
  name?: string;
  enable?: boolean;
}

export const defaultValueNewsGroup: Readonly<IResidentNewsGroup> = {
  id: TEXT_EMPTY,
  name: TEXT_EMPTY,
  enable: true,
};

export interface IResponsePaginationResidentNews {
  totalItems: number;
  currentPage: number;
  totalPages: number;
  items: IResidentNews[];
}

export interface IResidentNews {
  id?: string;
  title?: string;
  startTime?: string;
  endTime?: string;
  image?: string;
  content?: string;
  user?: IUser;
  newsGroup?: IResidentNewsGroup;
  attachmentInfo?: IFile;
}

export const defaultValue: Readonly<IResidentNews> = {
  id: TEXT_EMPTY,
  title: TEXT_EMPTY,
  startTime: TEXT_EMPTY,
  endTime: TEXT_EMPTY,
  image: TEXT_EMPTY,
  content: TEXT_EMPTY,
  user: {},
  newsGroup: defaultValueNewsGroup,
  attachmentInfo: IFileDefaultValue,
};
