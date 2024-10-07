import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-masters',
  templateUrl: './masters.component.html',
  styleUrls: ['./masters.component.scss']
})
export class MastersComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToMaster() {
    this.router.navigate(['masters/bankmaster']);
  }

  navigateToEmployee() {
    this.router.navigateByUrl('masters/employee');
  }

  navigateToRequest() {
    this.router.navigateByUrl('masters/requestor');
  }

  navigateToProject() {
    this.router.navigateByUrl('masters/4');
  }
}
