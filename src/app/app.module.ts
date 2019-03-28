import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import{ environment} from "../environments/environment";
import { AngularFireModule } from "angularfire2";
import { AngularFireAuthModule } from "angularfire2/auth";
import { AngularFirestoreModule } from "angularfire2/firestore";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule,
         MatIconModule,
         MatInputModule,
         MatListModule,
         MatSnackBarModule,
         MatTableModule,
         MatPaginator,
         MatDialogModule,
         MatSelectModule,
         MatTooltipModule,
         MatSlideToggleModule,
         MatPaginatorModule

        } from "@angular/material";

import { LoginComponent,PreJogoComponent ,AdminComponent, PerguntaFormDialogComponent, ConfirmarRemoverDialogComponent } from './components';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PreJogoComponent,
    AdminComponent,
    PerguntaFormDialogComponent,
    ConfirmarRemoverDialogComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatSnackBarModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    MatSelectModule,
    MatTooltipModule,
    MatSlideToggleModule,
    AppRoutingModule
  ],
  providers: [],
  entryComponents: [
    PerguntaFormDialogComponent,
    ConfirmarRemoverDialogComponent
  ]
,  bootstrap: [AppComponent]
})
export class AppModule { }
