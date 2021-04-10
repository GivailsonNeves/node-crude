import { request } from "./api";

export class ProductApi {
    static async list() : Promise<any> {
        const {data} = await request(`products`);
        return data;
    }
}