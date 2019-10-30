import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IDocument } from '../interfaces/document.interface';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {
  url: string;
  constructor(private http: HttpClient) {
    this.url = 'http://localhost:4200/documents';
  }
  public getDocument(): Observable<Array<IDocument>> {
    return this.http.get<Array<IDocument>>(this.url);
  }
  public postDocument(document: IDocument): Observable<Array<IDocument>> {
    return this.http.post<Array<IDocument>>(this.url, document);
  }

}
