// import { Injectable } from '@angular/core';
// import { IContacts } from '../interfaces/contacts.interface';
// @Injectable({
//   providedIn: 'root'
// })
// export class ContactsService {
//   contacts: Array<IContacts> = [
//     {
//       id: 1,
//       name: 'namehere',
//       phone: '999999',
//       email: 'emailhere',
//       message: 'messagehere'

//     }
//   ];

//   constructor() { }
//   getData(): Array<IContacts> {
//     return this.contacts
//   }

//   setData(obj: IContacts): void {
//     this.contacts.push(obj)
//   }
// }


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IContact } from '../interfaces/contact.interface';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  url: string;
  constructor(private http: HttpClient) {
    this.url = 'http://localhost:4200/contact';
  }
  public getContact(): Observable<Array<IContact>> {
    return this.http.get<Array<IContact>>(this.url);
  }
  public postContact(contact: IContact): Observable<Array<IContact>> {
    return this.http.post<Array<IContact>>(this.url, contact);
  }

}