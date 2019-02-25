import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpService } from 'src/app/service/http.service';
import { CardsComponent } from '../cards/cards.component';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {

  userData: any;
  noteData: any;

  constructor(

    private http: HttpService,
    private snackBar: MatSnackBar,

  ) { }

  @ViewChild('cards')
  public cards: CardsComponent;

  ngOnInit() {
    this.getNotes();
  }


  getNotes() {

    console.log("Archive getNotes calling ");
    let userCredentials = JSON.parse(localStorage.getItem("loginItem"));

    this.userData = {
      user: {
        userId: userCredentials.data.userId
      }
    }
    this.http.get("note/getNotes").subscribe(
      (data) => {

        console.log("asasasasasssass");
        
        this.noteData = data;

        for (let i = 0; i < this.noteData.length; i++) {
          console.log(this.noteData[i]);
        }
      }
    )
  }

  addTrash(item) {

    let noteData = {
      noteId: item.noteId,
      trash: item.trash

    }
    console.log(noteData);
    this.http.putBoolean("note/trash/"+item.noteId).subscribe(
      (data) => {
        console.log(data);
        this.getNotes();
        this.snackBar.open('Note restored', 'Okay', { duration: 3000 });
      }
    )

  }

  deleteNote(item) {

    let noteData = {
      noteId: item.noteId,
      trash: item.trash

    }
    console.log(noteData);
    this.http.delete("note/delete/" + item.noteId).subscribe(
      (data) => {
        console.log(data);
        this.getNotes();
        this.snackBar.open('Note deleted', '', { duration: 3000 });
      }
    )

  }



}
