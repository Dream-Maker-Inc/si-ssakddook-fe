import { LifeItemResponse, LifeItemsResponse } from "./life.dto";

export interface LifeApiInterface {
  findOneLifeById(lifeId: string): Promise<LifeItemResponse>;
}
