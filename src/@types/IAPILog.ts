export interface IApiLog {
  url: string;
  requestBody: object | null;
  responseStatus: number | string;
  method: string;
}