import { Component, OnInit } from '@angular/core';
import { IDocument } from 'src/app/shared/interfaces/document.interface';
import { AngularFireStorageReference, AngularFireUploadTask, AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { DocumentService } from 'src/app/shared/services/documents.service';
import { map, finalize } from 'rxjs/operators';
import { Document } from 'src/app/shared/classes/document.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-admin-documentation',
  templateUrl: './admin-documentation.component.html',
  styleUrls: ['./admin-documentation.component.scss']
})
export class  AdminDocumentationComponent implements OnInit {
  document: Array<IDocument> = [];
  documentTitle: string;
  documentPdf: string;
  documentDescription: string;
  documentId: string;
  formData: IDocument;

  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  uploadState: Observable<string>;
  uploadProgress: Observable<number>;
  downloadURL: Observable<string>;
  urlPdf: string;

  constructor(private documentService: DocumentService,
              private DocStorage: AngularFireStorage,
              private firestore: AngularFirestore) {
    this.onDate();
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
      pdf: '',
      description: '',
      title: ''
    };
  }

  public onDate(): void {
    this.firestore.collection('document').snapshotChanges().subscribe(
      arrCollection => {
        this.document = arrCollection.map(item => {
          return {
            id: item.payload.doc.id,
            ...item.payload.doc.data()
          } as IDocument;
        });
      }
    );
  }

  public onSubmit(form: NgForm): void {
    form.value.pdf = this.documentPdf;
    const data = Object.assign({}, form.value);
    delete data.id;
    if (form.value.id == null) {
      this.firestore.collection('document').add(data);
    } else {
      this.firestore.doc('document/' + form.value.id).update(data);
    }
    this.resetForm();
  }

  onEdit(document: IDocument) {
    this.formData = Object.assign({}, document);
  }

  onDelete(id: string) {
    if (confirm('Are you sure to delete this record?')) {
      this.firestore.doc('document/' + id).delete();
    }
  }

  public upload(event): void {
    const id = Math.random().toString(36).substring(2);
    this.ref = this.DocStorage.ref(`pdf/${id}`);
    this.task = this.ref.put(event.target.files[0]);
    this.uploadState = this.task.snapshotChanges().pipe(map(s => s.state));
    this.uploadProgress = this.task.percentageChanges();
    this.task.snapshotChanges().pipe(
      finalize(() => {
        this.downloadURL = this.ref.getDownloadURL()
        this.downloadURL.subscribe(url => this.documentPdf = url)
      })
    ).subscribe();
  }
}


