import { Component, OnInit } from '@angular/core';
import { IGallery } from 'src/app/shared/interfaces/gallery.interface';
import { AngularFireStorageReference, AngularFireUploadTask, AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { GalleryService } from 'src/app/shared/services/gallery.service';
import { map, finalize } from 'rxjs/operators';
import { Gallery } from 'src/app/shared/classes/gallery.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss']
})




export class AdminHomeComponent implements OnInit {
  gallery: Array<IGallery> = [];
  galleryImage: string;
  galleryId: string;
  formData: IGallery;

  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  uploadState: Observable<string>;
  uploadProgress: Observable<number>;
  downloadURL: Observable<string>;
  urlImage: string;

  constructor(private galleryService: GalleryService,
    private GalStorage: AngularFireStorage,
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

    };
  }

  public onDate(): void {
    this.firestore.collection('gallery').snapshotChanges().subscribe(
      arrCollection => {
        this.gallery = arrCollection.map(item => {
          return {
            id: item.payload.doc.id,
            ...item.payload.doc.data()
          } as IGallery;
        });
      }
    );
  }

  public onSubmit(form: NgForm): void {
    form.value.image = this.galleryImage;
    const data = Object.assign({}, form.value);
    delete data.id;
    if (form.value.id == null) {
      this.firestore.collection('gallery').add(data);
    } else {
      this.firestore.doc('gallery/' + form.value.id).update(data);
    }
    this.resetForm();
  }
  onDelete(id: string) {
    if (confirm('Are you sure to delete this record?')) {
      this.firestore.doc('gallery/' + id).delete();
    }
  }

  public upload(event): void {
    const id = Math.random().toString(36).substring(2);
    this.ref = this.GalStorage.ref(`images/${id}`);
    this.task = this.ref.put(event.target.files[0]);
    this.uploadState = this.task.snapshotChanges().pipe(map(s => s.state));
    this.uploadProgress = this.task.percentageChanges();
    this.task.snapshotChanges().pipe(
      finalize(() => {
        this.downloadURL = this.ref.getDownloadURL()
        this.downloadURL.subscribe(url => this.galleryImage = url)
      })
    ).subscribe();
  }
}