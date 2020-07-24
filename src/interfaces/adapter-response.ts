export enum AdapterStatus {
  ERRORED = 'errored',
}

export interface IAdapterResponse {
  jobRunID: string;
  data?: any;
  status?: AdapterStatus;
  error?: any;
}
