import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { NoteModel } from "src/app/models/notes.model";
import { HttpService } from 'src/app/service/http.service';
import { Router } from '@angular/router';
import { NotesComponent } from "../notes/notes.component";
import { AmazingTimePickerService } from 'amazing-time-picker';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-addnote',
  templateUrl: './addnote.component.html',
  styleUrls: ['./addnote.component.scss']
})

export class AddnoteComponent implements OnInit {

  @Output() messageEvent = new EventEmitter<String>();

  isOpen: Boolean;
  // notes: any;
  note: NoteModel = new NoteModel();
  title: String;
  noteData: any;
  body: String;
  data: any;
  reminder: String = null;
  color: any = "white";
  pinValue: Boolean = false;
  trash: Boolean = false;
  archiveValue: Boolean = false;
  reminderMenuBool: Boolean = false;
  showReminderMenu: Boolean;
  colorCode: Array<Object> = [
    { name: "white", colorCode: "rgb(255, 255, 255)" },
    { name: "lightGreen", colorCode: "rgb(204, 255, 144)" },
    { name: "purple", colorCode: "rgb(215, 174, 251)" },
    { name: "red", colorCode: "rgb(242, 139, 130)" },
    { name: "Teal", colorCode: "rgb(167, 255, 235)" },
    { name: "pink", colorCode: "rgb(253, 207, 232)" },
    { name: "orange", colorCode: "rgb(251, 188, 4)" },
    { name: "blue", colorCode: "rgb(203, 240, 248)" },
    { name: "brown", colorCode: "rgb(230, 201, 168)" },
    { name: "yellow", colorCode: "rgb(255, 244, 117)" },
    { name: "darkBlue", colorCode: "rgb(174, 203, 250)" },
    { name: "gray", colorCode: "rgb(232, 234, 237)" }
  ]

  pinnedIconSrc = "../../assets/Icons/pinIcon.svg";
  unpinnedIconSrc = "../../assets/Icons/unpinIcon.svg";

  // reminder: String = null;
  inputTime: String = null;
  inputDate: Date = null;


  constructor(
    private http: HttpService,
    private router: Router,
    private atp: AmazingTimePickerService,
    private snackBar: MatSnackBar,
  ) { }

  @ViewChild('child')
  public child: NotesComponent;

  ngOnInit() {



  }

  addNoteClose() {

    this.reminderMenuBool = false;
    this.showReminderMenu = false;

    if (this.note.body || this.note.title) {
      let userCredentials = JSON.parse(localStorage.getItem("loginItem"));

      this.noteData = {
        title: this.note.title,
        body: this.note.body,
        reminder: this.reminder,
        pin: this.pinValue,
        trash: this.trash,
        archive: this.archiveValue,
        color: this.color,
        user: {
          userId: userCredentials.data.userId
        }
      }
      console.log(this.note);

      this.http.post(this.noteData, "note/addNote").subscribe(
        (data) => {
          console.log("Response After addNote", data);

          this.child.getNotes();
          this.note.title = null;
          this.note.body = null;
          this.color = "white";
          this.pinValue = false;
          this.reminder = null;
          this.archiveValue = false;
          this.trash = false;

          this.snackBar.open('Note Added', 'Okay', { duration: 3000 });

        },
        (error) => {
          console.log("error After addNote", error, this.noteData);
          this.snackBar.open('Note addition Failed', 'Okay', { duration: 3000 });
        }
      )
    } else {
      this.color = "white";
      console.log("Empty note!");
    }
  }

  addTrash(): void {

    if (!this.trash) {
      this.trash = true;
      this.addNoteClose();

    }

  }

  archive() {

    if (!this.archiveValue) {
      this.archiveValue = true;
      this.addNoteClose();

    }

  }

  pin() {
    if (this.pinValue) {
      this.pinValue = false;
    } else {
      this.pinValue = true;
    }
  }

  changeColor(color) {

    this.color = color;

  }

  toggleReminderMenu() {
    if (this.reminderMenuBool) {
      this.reminderMenuBool = false;
    } else {
      this.reminderMenuBool = true;
    }
  }

  // toggleShowReminder() {

  //   if (this.showReminderMenu) {
  //     this.showReminderMenu = false;
  //   } else {
  //     this.showReminderMenu = true;
  //   }
  // }

  setReminder() {
    if (this.inputDate && this.inputTime) {
      this.reminder = this.inputDate.toLocaleDateString() + ", " + this.inputTime;
    }

  }

  deleteReminder() {

    this.reminder = null;
  }


  // open() {
  //   const amazingTimePicker = this.atp.open();
  //   amazingTimePicker.afterClose().subscribe(time => {
  //     console.log(time);
  //   });
  // }

}
