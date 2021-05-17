import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  private readonly API: string = "https://portfoliobackapi.herokuapp.com/";

  constructor(private http: HttpClient) { }

  list(): any {
    return this.http.get<any>(this.API + 'projects')
      .pipe(
        tap(console.log)
      );
  }
}
