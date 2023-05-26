import { Observable } from "rxjs";
import { UserModel } from "../../domain/models/user.model";

export interface UserService {
    create(entity: UserModel): Observable<UserModel>;
    findAll(): Observable<UserModel[]>;
    findUserById(id: string): Observable<UserModel>;
    updateUserInfo(id: string, entity: UserModel): Observable<UserModel>;
    deleteUser(id: string): Observable<boolean>;
}