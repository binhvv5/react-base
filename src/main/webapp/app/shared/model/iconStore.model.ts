export interface IStoreIcon {
  id?: string;
  icon?: string;
  type?: number;
}

export const defaultStoreIcon: Readonly<IStoreIcon> = {
  id: null,
  icon: null,
  type: null,
};
