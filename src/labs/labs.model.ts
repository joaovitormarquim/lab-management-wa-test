export interface Lab {
  id: string;
  name: string;
  status: LabStatus;
  address: string;
}

export enum LabStatus {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
}
