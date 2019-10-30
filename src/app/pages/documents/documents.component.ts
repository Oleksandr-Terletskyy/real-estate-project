import { Component, OnInit } from '@angular/core';
import { IDocument } from 'src/app/shared/interfaces/document.interface';
import { AngularFireStorageReference, AngularFireUploadTask, AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { DocumentService } from 'src/app/shared/services/documents.service';
import { AngularFirestore } from '@angular/fire/firestore';


@Component({
    selector: 'app-documents',
    templateUrl: './documents.component.html',
    styleUrls: ['./documents.component.scss']
  })
export class  DocumentsComponent implements OnInit {
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

  ngOnInit() {}

  
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

}



