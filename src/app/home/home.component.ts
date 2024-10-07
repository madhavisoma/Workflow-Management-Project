import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(
    private formbuilder: FormBuilder,
    private router: Router,
    private http: HttpService
  ) {}

  adminform!: FormGroup;
  ngOnInit(): void {
    this.adminform = this.formbuilder.group({
      name: this.formbuilder.control(''),
      age: this.formbuilder.control(''),
    });
  }
  onSubmit() {
    console.log(this.adminform.value);
    this.router.navigateByUrl('masters');
    this.http
      .postdata(
        'api/bankapplication_router/bankapplication_controller',
        this.adminform.value
      )
      .subscribe((result) => {
        console.log(result);
      });
  }

  navigateToResetPwd() {
    this.router.navigateByUrl('Authentication/resetpwd');
  }

}
