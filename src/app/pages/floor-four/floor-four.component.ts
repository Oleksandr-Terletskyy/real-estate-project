import { Component, OnInit } from '@angular/core';
import { IContact } from 'src/app/shared/interfaces/contact.interface';
import { AngularFireStorageReference, AngularFireUploadTask, AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { ContactService } from 'src/app/shared/services/contact.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-floor-four',
    templateUrl: './floor-four.component.html',
    styleUrls: ['./floor-four.component.scss']
  })
  
export class  FloorFourComponent implements OnInit {
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
      }

  ngOnInit() {
    this.resetForm();
   }

  public resetForm(form?: NgForm) {
    if (form != null) {
      form.resetForm();
    }
    this.formData = {
      id: null,
      name: '',
      phone: '',
      email: '',
      message: ''
    };
  }

   public onSubmit(form: NgForm): void {
    
    const data = Object.assign({}, form.value);
    delete data.id;
    if (form.value.id == null) {
      this.firestore.collection('contact').add(data);
    } else {
      this.firestore.doc('contact/' + form.value.id).update(data);
    }
    this.resetForm();
  }

}
