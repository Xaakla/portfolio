import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private readonly API: string = environment.API;

  constructor(private http: HttpClient) { }

  list(): any {
    return this.http.get<any>(this.API + 'projects')
      .pipe(
        tap(console.log)
      );
  }

  sendMail(data: any): any {
    return this.http.post<any>(this.API + 'sendmail', data)
      .pipe(
        tap(console.log)
      );
  }

}
