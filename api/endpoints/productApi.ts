import { env, getToken } from "../../utils/env";
import { GET } from "../methods/get";
import { POST } from "../methods/post";

type addProductToBasketBody = {
  productId: string;
  userId: string;
  productName: string;
  price: number;
  discountedPrice: number;
};

export class ProductApi {
  static async getProductsCount() {
    return GET(`${env.baseUrl}/products/count`);
  }

  static async addProductToBasket(body: addProductToBasketBody) {
    return POST(`${env.baseUrl}/basket-items`, body, {
      Authorization: `Bearer ${getToken()}`,
    });
  }
}
