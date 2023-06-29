export type MpApiKeyCreate ={
  label: string;
  permissions: string[];
  cancelOnDisconnect: boolean;

}

export type MpApiKey ={
  label: string;
  permissions: string[];
  cancelOnDisconnect: boolean;
  mpId:string;
  secret: string;
  apiKey: string;
}
