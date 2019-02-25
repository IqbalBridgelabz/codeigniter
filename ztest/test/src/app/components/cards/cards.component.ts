import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpService } from 'src/app/service/http.service';
import { MatSnackBar, MatDialog } from '@angular/material';
import { EditCardComponent } from '../edit-card/edit-card.component';


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  @Input() item: any;
  @Output() messageEvent = new EventEmitter<String>();

  pinnedIconSrc = "../../assets/Icons/pinIcon.svg";
  unpinnedIconSrc = "../../assets/Icons/unpinIcon.svg";

  reminderMenuBool: Boolean = false;
  // showReminderMenu: Boolean;
  reminder: String = null;
  inputDate: Date = null;
  inputTime: String = null;
  showButton: boolean;

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


  constructor(
    private http: HttpService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog,
  ) {

    this.showButton = false;
  }

  ngOnInit() {
    this.reminder = this.item;
  }


  addTrash(item): void {

    let noteData = {
      noteId: item.noteId,
      trash: item.trash

    }
    console.log(noteData);
    this.http.putBoolean("note/trash/" + item.noteId).subscribe(
      (data) => {
        console.log(data);
        this.messageEvent.emit("emit from child");
        this.snackBar.open('Note Trashed', 'Okay', { duration: 3000 });
      }
    )

  }

  archive(item) {

    let noteData = {
      noteId: item.noteId,
      archive: item.archive

    }
    console.log(noteData);
    this.http.putBoolean("note/archive/" + item.noteId).subscribe(
      (data) => {
        console.log(data);
        this.messageEvent.emit("emit from child");
        this.snackBar.open('Note Archived', 'Okay', { duration: 3000 });
      }
    )

  }

  pin(item) {

    let noteData = {
      noteId: item.noteId,
      pin: item.pin

    }
    console.log(noteData);
    this.http.putBoolean("note/pin/" + item.noteId).subscribe(
      (data) => {
        console.log(data);

        this.messageEvent.emit("emit from child");

        this.snackBar.open('Note pined', 'Okay', { duration: 3000 });
      }
    )

  }


  openEditDialog(item) {
    const dialogRef = this.dialog.open(EditCardComponent, {
      data: item
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.http.put(item, "note").subscribe(

      )
      this.messageEvent.emit("emit from child");

    });

  }

  changeColor(colorCode: string, item) {
    // console.log(item);

    // item.color = colorCode;
    console.log(item.noteId);

    this.http.put(colorCode, "note/color/" + item.noteId).subscribe(
      (data) => {
        this.messageEvent.emit("emit from child");
      }
    );
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

  setReminder(item) {

    this.reminder = this.inputDate.toLocaleDateString() + ", " + this.inputTime;

    // let dateFormat = require('dateformat');
    // let now = new Date();
    // let tempDate = dateFormat(now, " mm/dd/yyyy, HH:MM");
    // console.log(tempDate);

    let data = {
      noteId: this.item.noteId,
      reminder: this.reminder

    }

    this.http.put(this.reminder, "note/reminder/" + item.noteId).subscribe(

      (data) => {
        console.log(data);
        this.messageEvent.emit("emit from child");
      },
      (error) => {
        console.log(error);
      }
    )
  }

  deleteReminder(item) {

    this.item.reminder = null;

    let data = {
      noteId: this.item.noteId,
      reminder: this.item.reminder
    }
    this.http.put(this.item.reminder, "note/reminder/" + item.noteId).subscribe(

      (data) => {
        console.log(data);
        this.messageEvent.emit("emit from child");
      },
      (error) => {
        console.log(error);
      }
    )


  }



}
