import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddInputComponent } from './add-input/add-input.component';
import { ShowApiComponent } from './show-api/show-api.component';
import { SectionsComponent } from './sections/sections.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowApiComponent,
    AddInputComponent,
    SectionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
