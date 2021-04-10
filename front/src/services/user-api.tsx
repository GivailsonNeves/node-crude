import { request } from "./api";

export class UserApi {
    static login(credentials: {password: string, email: string}) : Promise<any> {
        return request('login', 'POST', credentials);
    }
}