import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IBuilding } from '../interfaces/building.interface';

@Injectable({
  providedIn: 'root'
})
export class BuildingService {
  url: string;
  constructor(private http: HttpClient) {
    // this.url = 'http://localhost:4200/construction';
    // this.url = 'https://real-estate-88723.firebaseio.com';
    this.url = 'http://localhost:4200/admin-construction';
  }
  public getBuilding(): Observable<Array<IBuilding>> {
    return this.http.get<Array<IBuilding>>(this.url);
  }
  public postBuilding(building: IBuilding): Observable<Array<IBuilding>> {
    return this.http.post<Array<IBuilding>>(this.url, building);
  }
}
