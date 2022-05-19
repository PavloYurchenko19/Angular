import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { IUsers } from '../interface/IUsers';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _url = 'http://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {
  }

  getUsers(): Observable<IUsers[]> {
    return this.http.get<IUsers[]>(this._url);
  }

  getUser(id: string): Observable<IUsers> {
    return this.http.get<IUsers>(this._url + '/' + id);
  }

}

