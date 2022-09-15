import {
  ServiceFindAllApiResponse,
  ServiceFindOneApiResponse,
} from "./serviceTerms.dto";

export interface ServiceTermsApiInterface {
  findAll(): Promise<ServiceFindAllApiResponse>;
  findOne(): Promise<ServiceFindOneApiResponse>;
}
