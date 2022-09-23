import { LifeItemResponse, LifeItemsResponse } from "./life.dto";

export interface LifeApiInterface {
  findAllLife(page: number, size: number): Promise<LifeItemsResponse>;
  findOneLifeById(lifeId: string): Promise<LifeItemResponse>;
}
