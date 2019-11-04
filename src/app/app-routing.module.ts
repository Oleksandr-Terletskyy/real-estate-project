import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { ConstructionComponent } from './pages/construction/construction.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FlatsComponent } from './pages/flats/flats.component';
import { LocationComponent } from './pages/location/location.component';
import { DocumentsComponent } from './pages/documents/documents.component';

import { FloorOneComponent } from './pages/floor-one/floor-one.component';
import { FloorTwoComponent } from './pages/floor-two/floor-two.component';
import { FloorThreeComponent } from './pages/floor-three/floor-three.component';
import { FloorFourComponent } from './pages/floor-four/floor-four.component';

import { AdminComponent } from './admin/admin.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { AdminConstructionComponent } from './admin/admin-construction/admin-construction.component';
import { AdminDocumentationComponent } from './admin/admin-documentation/admin-documentation.component';
import { AdminContactsComponent } from './admin/admin-contacts/admin-contacts.component';





const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'flats', component: FlatsComponent },
  { path: 'first_floor', component: FloorOneComponent },
  { path: 'second_floor', component: FloorTwoComponent },
  { path: 'third_floor', component: FloorThreeComponent },
  { path: 'fourth_floor', component: FloorFourComponent },

  { path: 'location', component: LocationComponent },
  { path: 'documents', component: DocumentsComponent },
  { path: 'construction', component: ConstructionComponent },
  { path: 'contact', component: ContactComponent },

  {
    path: 'admin', component: AdminComponent, children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: AdminHomeComponent },
      { path: 'construction', component: AdminConstructionComponent },
      { path: 'contacts', component: AdminContactsComponent },
      { path: 'documents', component: AdminDocumentationComponent },
    ]
  },

  { path: '**', redirectTo: 'home' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
