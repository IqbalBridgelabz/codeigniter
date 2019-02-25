import { Component, OnInit } from '@angular/core';
import { LabelModel } from '../models/label.model';
import { HttpService } from '../service/http.service';
import { MatSnackBar, defaultRippleAnimationConfig } from '@angular/material';

@Component({
  selector: 'app-edit-label',
  templateUrl: './edit-label.component.html',
  styleUrls: ['./edit-label.component.scss']
})
export class EditLabelComponent implements OnInit {

  label: LabelModel = new LabelModel();

  constructor(
    private http: HttpService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {

    this.getLabel();

  }


  addLabel() {

    this.http.put(this.label.labelName, "label/addLabel").subscribe(

      (data) => {
        this.snackBar.open("Laebl Created ", "Okay", { duration: 2000 });
      },

      (error) => {

        this.snackBar.open("Laebl Not Created", "Okay", { duration: 2000 });
      });
  }


  getLabel() {



  }

}
