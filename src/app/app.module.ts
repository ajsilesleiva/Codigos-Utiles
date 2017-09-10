import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule, MdCheckboxModule} from '@angular/material';
import {MdInputModule} from '@angular/material';
import {MdGridListModule} from '@angular/material';
import {MdCardModule} from '@angular/material';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdCheckboxModule,
    MdInputModule,
    MdGridListModule,
    MdCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
