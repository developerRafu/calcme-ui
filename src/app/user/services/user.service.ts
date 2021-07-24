import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { User } from "../models/user";
import { UserForm } from "../models/user-form";

const API = 'http://localhost:8080'

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(private http: HttpClient) {

    }

    public save(userForm: UserForm) {
        return this.http.post<User>(API + '/users', userForm);
    }

    findAll() {
        return this.http.get<User[]>(API + '/users');
    }
}