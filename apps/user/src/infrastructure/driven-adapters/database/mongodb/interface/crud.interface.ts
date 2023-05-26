import { Observable } from "rxjs";

export interface Crud<T, B> {
    create(entity: T): Observable<B>;
    findAll(): Observable<B[]>;
    findUserById(id: string): Observable<B>;
    updateUserInfo(id: string, entity: T): Observable<B>;
    deleteUser(id: string): Observable<boolean>;
}