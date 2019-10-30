import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IConstruction } from '../interfaces/construction.interface';

@Injectable({
  providedIn: 'root'
})
export class ConstructionService {
  url: string;
  constructor(private http: HttpClient) {
    this.url = 'http://localhost:4200/construction';
  }

  public getConstruction(): Observable<Array<IConstruction>> {
    return this.http.get<Array<IConstruction>>(this.url);
  }
  public postConstruction(construction: IConstruction): Observable<Array<IConstruction>> {
    return this.http.post<Array<IConstruction>>(this.url, construction);
  }

}
