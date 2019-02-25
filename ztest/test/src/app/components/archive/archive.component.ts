import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpService } from 'src/app/service/http.service';
import { CardsComponent } from '../cards/cards.component';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {

  userData: any;
  noteData: any;

  constructor(
    private http: HttpService ,
  ) { }

  @ViewChild('cards')
  public cards: CardsComponent;

  ngOnInit() {
    this.getNotes();
  }

  getNotes() {

    console.log("Archive getNotes calling ");
  
    this.http.get("note/getNotes").subscribe(
      (data) => {

        this.noteData = data;

        for (let i = 0; i < this.noteData.length; i++) {
          console.log(this.noteData[i]);
        }
      }
    )
  }

  receiveMessage($event) {

    console.log($event);

    this.getNotes();


  }
}
