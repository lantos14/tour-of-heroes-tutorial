import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(
    private http: HttpClient,
  ) { }

  fetchData() {
    return this.http.get(`http://www.randomtext.me/api/gibberish/p-1/1-1`)
      .pipe(
        map(response => response.text_out.slice(3, -6)),
        catchError(err => of('error: ', err))
      )
    ;
  }
}
