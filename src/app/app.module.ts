import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';

import { ConstructionComponent } from './pages/construction/construction.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FlatsComponent } from './pages/flats/flats.component';
import { LocationComponent } from './pages/location/location.component';
import { DocumentsComponent } from './pages/documents/documents.component';

import { AdminComponent } from './admin/admin.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { AdminConstructionComponent } from './admin/admin-construction/admin-construction.component';
import { AdminDocumentationComponent } from './admin/admin-documentation/admin-documentation.component';
import { AdminContactsComponent } from './admin/admin-contacts/admin-contacts.component';

import { FloorOneComponent } from './pages/floor-one/floor-one.component';
import { FloorTwoComponent } from './pages/floor-two/floor-two.component';
import { FloorThreeComponent } from './pages/floor-three/floor-three.component';
import { FloorFourComponent } from './pages/floor-four/floor-four.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';






@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ConstructionComponent,
    ContactComponent,
    FlatsComponent,
    LocationComponent,
    DocumentsComponent,
    AdminComponent,
    AdminHomeComponent,
    AdminContactsComponent,
    AdminConstructionComponent,
    AdminDocumentationComponent,
    FloorOneComponent,
    FloorTwoComponent,
    FloorThreeComponent,
    FloorFourComponent,
  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'my-app-name'),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
