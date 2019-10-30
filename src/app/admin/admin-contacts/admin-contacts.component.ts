import { Component, OnInit } from '@angular/core';
import { IContact } from 'src/app/shared/interfaces/contact.interface';
import { AngularFireStorageReference, AngularFireUploadTask, AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { ContactService } from 'src/app/shared/services/contact.service';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-admin-contacts',
  templateUrl: './admin-contacts.component.html',
  styleUrls: ['./admin-contacts.component.scss']
})
export class AdminContactsComponent implements OnInit {
  contact: Array<IContact> = [];
  contactName: string;
  contactPhone: string;
  contactEmail: string;
  contactMessage: string;
  documentId: string;
  formData: IContact;

  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  uploadState: Observable<string>;
  uploadProgress: Observable<number>;
  downloadURL: Observable<string>;


  constructor(private contactService: ContactService,
    private ContStorage: AngularFireStorage,
    private firestore: AngularFirestore) {
    this.onDate();
  }

  ngOnInit() {}

  public onDate(): void {
    this.firestore.collection('contact').snapshotChanges().subscribe(
      arrCollection => {
        this.contact = arrCollection.map(item => {
          return {
            id: item.payload.doc.id,
            ...item.payload.doc.data()
          } as IContact;
        });
      }
    );
  }



  onDelete(id: string) {
    if (confirm('Are you sure to delete this record?')) {
      this.firestore.doc('contact/' + id).delete();
    }
  }

}