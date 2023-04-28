import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tourist } from './tourist';


@Injectable({
  providedIn: 'root'
})
export class TouristService {

  private baseUrl="http://localhost:8092/api/v1/tourists";
  constructor(private httpClient: HttpClient) { }

  getTouristsList(): Observable<Tourist[]>{
    return this.httpClient.get<Tourist[]>(`${this.baseUrl}`);
  }
  createTourist(tourist: Tourist):Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}`,tourist);
  }

}
