export type ApiFailedResponse = {
  data: any;
  statusCode: string;
  message: string;
  ref: any;
};

export const isApiFailedResponse = (target: any) =>
  target.statusCode !== "S0000";
