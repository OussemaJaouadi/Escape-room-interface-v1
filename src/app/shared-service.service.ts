import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {
  readonly APIURL = 'http://127.0.0.1:8000/';
  constructor(private http: HttpClient) {}
   getTeamList():Observable<any[]>{
     return this.http.get<any[]>(this.APIURL+'team');
   }
   addTeam(value:String[]){
     return this.http.post(this.APIURL+'team',value);
   }
   login(value:any){
     return this.http.post(this.APIURL+'login',value)
   }
}
