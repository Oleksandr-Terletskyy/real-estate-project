import { Component, OnInit } from '@angular/core';
import { IConstruction } from 'src/app/shared/interfaces/construction.interface';
import { AngularFireStorageReference, AngularFireUploadTask, AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { ConstructionService } from 'src/app/shared/services/construction.service';
import { AngularFirestore } from '@angular/fire/firestore';


@Component({
    selector: 'app-construction',
    templateUrl: './construction.component.html',
    styleUrls: ['./construction.component.scss']
  })
export class ConstructionComponent implements OnInit {
  construction: Array<IConstruction> = [];
  constructionDate: string;
  constructionImage: string;
  constructionText: string;
  constructionId: string;
  formData: IConstruction;

  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  uploadState: Observable<string>;
  uploadProgress: Observable<number>;
  downloadURL: Observable<string>;
  urlImage: string;

  constructor(private constructionService: ConstructionService,
              private ConstStorage: AngularFireStorage,
              private firestore: AngularFirestore) {
    this.onDate();
  }

  ngOnInit() {}

  
  public onDate(): void {
    this.firestore.collection('construction').snapshotChanges().subscribe(
      arrCollection => {
        this.construction = arrCollection.map(item => {
          return {
            id: item.payload.doc.id,
            ...item.payload.doc.data()
          } as IConstruction;
        });
      }
    );
  }
 
}
