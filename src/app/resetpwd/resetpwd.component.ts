import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-resetpwd',
  templateUrl: './resetpwd.component.html',
  styleUrls: ['./resetpwd.component.scss']
})
export class ResetpwdComponent implements OnInit {

  constructor(private formbuilder:FormBuilder) { }

  adminform!:FormGroup;
  ngOnInit(): void {
    this.adminform = this.formbuilder.group({
      emailid: this.formbuilder.control('',Validators.required)
    })
  }

  OnSubmit(){
    alert(this.adminform.value);
  }
}
