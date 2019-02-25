import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { HttpService } from 'src/app/service/http.service';
@Component({
  selector: 'app-edit-card',
  templateUrl: './edit-card.component.html',
  styleUrls: ['./edit-card.component.scss']
})
export class EditCardComponent implements OnInit {

  pinnedIconSrc = "../../assets/Icons/pinIcon.svg";
  unpinnedIconSrc = "../../assets/Icons/unpinIcon.svg";
  reminderMenuBool: Boolean = false;
  // showReminderMenu: Boolean;

  reminder: String = null;
  inputTime: String = null;
  inputDate: Date = null;
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
    public dialogRef: MatDialogRef<EditCardComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private http: HttpService,
    private snackbar: MatSnackBar,

  ) {

  }

  ngOnInit() {

    this.reminder = this.data.reminder;


  }

  saveEditedNote(data) {

    console.log(data);

    this.http.put(data, "note/update").subscribe(

      (data) => {

        console.log(data);


        this.snackbar.open("Note Edited", "Okay", { duration: 2000 });

        (error) => {
          console.log(error);
        }
      });
  }

  addTrash(data): void {

    let noteData = {
      noteId: data.noteId,
      trash: data.trash

    }
    console.log(noteData);
    this.http.putBoolean("note/trash/"+this.data.noteId).subscribe(
      (data) => {
        console.log(data);
        // this.messageEvent.emit("emit from child");
        this.snackbar.open('Note Trashed', 'Okay', { duration: 3000 });
      }
    )

  }


  // changeColor(color, data) {

  //   data.color = color;

  // }

  changeColor(colorCode: string) {
  
    this.http.put(colorCode, "note/color/"+this.data.noteId).subscribe(
      (data) => {
        // this.messageEvent.emit("emit from child");
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

  setReminder() {

    this.reminder = this.inputDate.toLocaleDateString() + ", " + this.inputTime;

    // let dateFormat = require('dateformat');
    // let now = new Date();
    // let tempDate = dateFormat(now, " mm/dd/yyyy, HH:MM");
    // console.log(tempDate);

    let data = {
      noteId: this.data.noteId,
      reminder: this.reminder

    }
    this.http.put(this.reminder, "note/reminder/"+this.data.noteId).subscribe(

      (data) => {
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    )
  }

  deleteReminder() {

    this.reminder = null;

    let data = {
      noteId: this.data.noteId,
      reminder: this.reminder
    }
    this.http.put(this.reminder, "note/reminder/"+this.data.noteId).subscribe(

      (data) => {
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    )

  }

}
