import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';

class Response {
  amount: number;
  format: string;
  number: string;
  number_max: string;
  text_out: string;
  time: string;
  type: string;
}

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
        map((response:Response) => response.text_out.slice(3, -6)),
        catchError(err => of('error: ', err))
      )
    ;
  }
}
