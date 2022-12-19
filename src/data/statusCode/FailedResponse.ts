export type ApiFailedResponse = {
  data: any;
  statusCode: string;
  message: string;
  ref: any;
};

export const isApiFailedResponse = (target: any) => "statusCode" in target;
