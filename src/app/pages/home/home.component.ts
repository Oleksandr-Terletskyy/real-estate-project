import { Component, OnInit } from '@angular/core';
import { IGallery } from 'src/app/shared/interfaces/gallery.interface';
import { AngularFireStorageReference, AngularFireUploadTask, AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { GalleryService } from 'src/app/shared/services/gallery.service';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
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

    $(window).scroll(function () {
      $('.information').each(function () {
        let imagePos = $(this).offset().top;
        let topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow + 500) {
          $(this).addClass('slideInRight');
          $('.information1').addClass('zoomIn');
          $('.information2').addClass('slideInLeft');
        }
      });
    });

    $(window).scroll(function () {
      $('.move1').each(function () {
        let imagePos = $(this).offset().top;
        let topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow + 550) {
          $(this).addClass('slideInLeft');
          $('.move2').addClass('fadeInUp');
          $('.move3').addClass('slideInRight');
        }
      });

    });
    let btn = $('#button');
    $(window).scroll(function () {
      if ($(window).scrollTop() > 300) {
        btn.addClass('show');
      } else {
        btn.removeClass('show');
      }
    });
    btn.on('click', function (e) {
      e.preventDefault();
      $('html, body').animate({ scrollTop: 0 }, '300');
    });
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
}