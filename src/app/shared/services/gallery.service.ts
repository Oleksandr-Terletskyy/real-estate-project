import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IGallery } from '../interfaces/gallery.interface';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {
  url: string;
  constructor(private http: HttpClient) {
    this.url = 'http://localhost:4200/home';
  }
  public getGallery(): Observable<Array<IGallery>> {
    return this.http.get<Array<IGallery>>(this.url);
  }
  public postGallery(gallery: IGallery): Observable<Array<IGallery>> {
    return this.http.post<Array<IGallery>>(this.url, gallery);
  }
}

