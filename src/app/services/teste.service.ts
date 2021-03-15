import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TesteService {

  constructor(
    private http : HttpClient
  ) { }

  testeRequest() {
    this.http.get('localhost:8080/emeritvs-news/backend/connect.php').pipe(map((result : any) => {
      console.log('Boa tarde');
    }))
  }
}
