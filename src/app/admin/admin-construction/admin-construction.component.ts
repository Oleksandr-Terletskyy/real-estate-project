import { Component, OnInit } from '@angular/core';
import { IConstruction } from 'src/app/shared/interfaces/construction.interface';
import { AngularFireStorageReference, AngularFireUploadTask, AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { ConstructionService } from 'src/app/shared/services/construction.service';
import { map, finalize } from 'rxjs/operators';
import { Construction } from 'src/app/shared/classes/construction.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-admin-construction',
  templateUrl: './admin-construction.component.html',
  styleUrls: ['./admin-construction.component.scss']
})
export class AdminConstructionComponent implements OnInit {
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

  ngOnInit() {
    this.resetForm();
   }

  public resetForm(form?: NgForm) {
    if (form != null) {
      form.resetForm();
    }
    this.formData = {
      id: null,
      image: '',
      date: '',
      text: ''
    };
  }

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

  public onSubmit(form: NgForm): void {
    form.value.image = this.constructionImage;
    const data = Object.assign({}, form.value);
    delete data.id;
    if (form.value.id == null) {
      this.firestore.collection('construction').add(data);
    } else {
      this.firestore.doc('construction/' + form.value.id).update(data);
    }
    this.resetForm();
  }

  onEdit(construction: IConstruction) {
    this.formData = Object.assign({}, construction);
  }

  onDelete(id: string) {
    if (confirm('Are you sure to delete this record')) {
      this.firestore.doc('construction/' + id).delete();
    }
  }

  public upload(event): void {
    const id = Math.random().toString(36).substring(2);
    this.ref = this.ConstStorage.ref(`images/${id}`);
    this.task = this.ref.put(event.target.files[0]);
    this.uploadState = this.task.snapshotChanges().pipe(map(s => s.state));
    this.uploadProgress = this.task.percentageChanges();
    this.task.snapshotChanges().pipe(
      finalize(() => {
        this.downloadURL = this.ref.getDownloadURL()
        this.downloadURL.subscribe(url => this.constructionImage = url)
      })
    ).subscribe();
  }
}
