import { TEXT_EMPTY } from 'app/config/constant/constants';

export interface IFacilityMaintenance {
  id?: string;
  subject?: string;
  facilityId?: string;
  date?: any | null;
  reason?: string;
  type?: string;
  repairType?: string;
  cost?: number | null;
  content?: string;
  attachmentInfo?: IAttachmentInfo;
}

export const defaultValue: Readonly<IFacilityMaintenance> = {
  id: TEXT_EMPTY,
  subject: TEXT_EMPTY,
  facilityId: TEXT_EMPTY,
  date: null,
};

export interface IAttachmentInfo {
  fileId?: string;
  fileName?: string;
}
