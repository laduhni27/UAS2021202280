import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MahasiswaComponent } from './mahasiswa/mahasiswa.component';

@NgModule({
  declarations: [
    AppComponent,
    MahasiswaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
