import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MotoService {

  constructor(
    private http: HttpClient
  ) { }

  getRiders(){
   return this.http.get<any>('http://speedymoto.tindahans.online/riders.json')
  }
}
