import { request } from "./api";

export class UserApi {
    static async login(credentials: {password: string, email: string}) : Promise<any> {
        const {data: {name, token}} = await request('login', 'POST', credentials);
        window.localStorage.setItem('user-token', token);
        window.localStorage.setItem('user-name', name);
        return;
    }
    static async create(user: {password: string, email: string, name: string}) : Promise<any> {
        const {data: {name, token}} = await request('user', 'POST', user);
        return;
    }
    static async validateEmal(code: string) : Promise<any> {
        const {data: {name, token}} = await request(`validatelogin/${code}`, 'POST');
        return;
    }
    static logOut() {
        window.localStorage.removeItem('user-token');
        window.localStorage.removeItem('user-name');
    }
}