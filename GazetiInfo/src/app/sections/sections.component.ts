import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.css']
})
export class SectionsComponent implements OnInit {

  constructor(
    HttpClient,
    public id: number,
    public Name : string,
    public sections: Sections[] 
    ) {
    
   }

  //ngOnInit(): void {
  }

}

getSections(){
  this.httpClient.get<any>('http://localhost:8888/friends').subscribe(
    response => {
      console.log(response);
      //this.sections = response;
    }
  );
}