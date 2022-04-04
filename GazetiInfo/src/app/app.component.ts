import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {HttpClient} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
//import { AppComponent } from './app.component';
import { AddInputComponent } from './add-input/add-input.component';
import { ShowApiComponent } from './show-api/show-api.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Gazeti-Info';
}

