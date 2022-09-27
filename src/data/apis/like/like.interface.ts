import { LikeItemsResponse, LikeItemResponse } from "./lie.dto";
export interface LikeApiInterface {
  createLike(body: any): Promise<LikeItemResponse>;
  deleteLike(id: number): Promise<LikeItemResponse>;
}
