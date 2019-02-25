import { Component, OnInit, ViewChild } from '@angular/core';
import { NoteModel } from 'src/app/models/notes.model';
import { Router, RouterLinkWithHref } from '@angular/router';
import { HttpService } from 'src/app/service/http.service';
import { CardsComponent } from '../cards/cards.component';
import { DashBoadViewService } from 'src/app/service/dashboardView.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {

  userData: any;
  noteData: any;
  note: NoteModel = new NoteModel();
  pinValue: Boolean = false;
  counter: number = 0;
  view: String = "row wrap";
  cardWidth: String = "";

  constructor(
    private http: HttpService,
    private router: Router,
    private viewService: DashBoadViewService,
  ) { }

  @ViewChild('cards')
  public cards: CardsComponent;

  ngOnInit() {

    this.getNotes();
    this.viewService.currentMessage.subscribe(message => this.view = message)
    this.changeView();
  }

  getNotes() {

    console.log("get calling ");

    this.http.get("note/getNotes").subscribe(
      (data) => {
        this.noteData = data;
        for (let i = 0; i < this.noteData.length; i++) {
          console.log(this.noteData[i]);
        }
        let count = 0;
        for (let i = 0; i < this.noteData.length; i++) {
          if (this.noteData[i].pin && !this.noteData[i].trash && !this.noteData[i].archive) {
            // this.notes.push(this.noteData[i]);
            this.pinValue = true;
            this.counter++;
            count++;
            break;
          }
        }
        if (count == 0) {
          this.counter = 0;
          this.pinValue = false;
        }
      }, error => {
        console.log(error);
      }
    )
  }

  receiveMessage($event) {
    console.log($event);
    this.getNotes();
  }

  changeView() {
    // this.viewService.viewMessage("column");

    if (this.view  == "row") {
      this.cardWidth = "700px";
    } else if(this.view  == "column") {
      this.cardWidth = "1000px";
    }

  }

}
