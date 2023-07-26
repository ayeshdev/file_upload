import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { AngularFireModule } from '@angular/fire/compat';
import {AngularFireStorageModule} from'@angular/fire/compat/storage';
import { UploadDetailsComponent } from './components/upload-details/upload-details.component';
import { UploadFormComponent } from './components/upload-form/upload-form.component';
import { UploadListComponent } from './components/upload-list/upload-list.component';
import { AngularFireDatabase, AngularFireDatabaseModule, AngularFireList } from '@angular/fire/compat/database';
import { AngularFireStorage } from '@angular/fire/compat/storage';

@NgModule({
  declarations: [
    AppComponent,
    UploadDetailsComponent,
    UploadFormComponent,
    UploadListComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebase),
AngularFireModule,
AngularFireStorageModule,

  ],
  providers: [
    AngularFireDatabase,
    AngularFireStorage,
    AngularFireStorageModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
