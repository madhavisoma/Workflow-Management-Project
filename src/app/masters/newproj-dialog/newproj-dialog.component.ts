import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-newproj-dialog',
  templateUrl: './newproj-dialog.component.html',
  styleUrls: ['./newproj-dialog.component.scss']
})
export class NewprojDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any ) { }

  ngOnInit(): void {
  }

}
