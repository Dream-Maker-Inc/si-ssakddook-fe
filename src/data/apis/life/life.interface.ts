import { LifeItemResponse, LifeItemsResponse } from "./life.dto";

export interface LifeApiInterface {
  findOneLifeById(lifeId: string): Promise<LifeItemResponse>;
  findAllLife(size: number): Promise<LifeItemsResponse>;
  findAllLifeByViewCount(size: number): Promise<LifeItemsResponse>;
}
