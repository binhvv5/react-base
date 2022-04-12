import { TEXT_EMPTY } from 'app/config/constant/constants';
import { IAttachmentInfo } from './attachmentInfo.model';
import { IFacilityType } from './facilityType.model';

export interface IFacility {
  id?: string;
  name?: string;
  code?: string;
  unit?: string;
  typeId?: string;
  producer?: string;
  seriNumber?: number | null;
  buyDate?: any;
  place?: string;
  supplier?: string;
  supplierContact?: string;
  maintenanceCompany?: string;
  maintenanceCompanyContact?: string;
  numberUnitPerCycle?: number | null;
  cycleUnit?: number | null;
  expiryDate?: any;
  specification?: string;
  image?: string;
  attachmentInfo?: IAttachmentInfo;
  type?: IFacilityType;
  typeName?: string;
}

export const defaultValue: Readonly<IFacility> = {
  id: TEXT_EMPTY,
  name: TEXT_EMPTY,
  code: TEXT_EMPTY,
  unit: TEXT_EMPTY,
  typeId: TEXT_EMPTY,
  producer: TEXT_EMPTY,
  seriNumber: null,
  buyDate: null,
  place: TEXT_EMPTY,
  supplier: TEXT_EMPTY,
  supplierContact: TEXT_EMPTY,
  maintenanceCompany: TEXT_EMPTY,
  maintenanceCompanyContact: TEXT_EMPTY,
  numberUnitPerCycle: null,
  cycleUnit: null,
  expiryDate: null,
  specification: TEXT_EMPTY,
  image: TEXT_EMPTY,
  attachmentInfo: null,
  type: null,
  typeName: TEXT_EMPTY,
};
