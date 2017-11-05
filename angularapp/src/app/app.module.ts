import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BodyComponent } from './components/body/body.component';

import { MatDialogModule, MatButtonModule, MatInputModule } from '@angular/material';
import { SaveDialogComponent } from './components/save-dialog/save-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    SaveDialogComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [SaveDialogComponent]
})
export class AppModule { }
