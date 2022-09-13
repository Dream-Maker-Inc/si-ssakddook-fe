export type ApiFailedResponse = {
  statusCode: string;
  message: string;
  ref: any;
};

export const isApiFailedResponse = (target: any) => "statusCode" in target;
