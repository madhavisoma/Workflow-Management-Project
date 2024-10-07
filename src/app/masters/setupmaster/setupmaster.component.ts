import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-setupmaster',
  templateUrl: './setupmaster.component.html',
  styleUrls: ['./setupmaster.component.scss']
})
export class SetupmasterComponent implements OnInit {

  dataSource: any;
  displayedColoumns = ['id','name','shortid'];
  constructor(private http: HttpService, private formbuilder: FormBuilder) { }

  adminform!: FormGroup;
  ngOnInit(): void {
    this.adminform = this.formbuilder.group({
      name: this.formbuilder.control('',Validators.required),
      shortid: this.formbuilder.control('',Validators.required)
    })
    this.getData();
  }

  getData(){
    this.http.getData('api/setup_router/getData')
    .subscribe(result => {
      this.dataSource = result;
    })
  }

  onSubmit(){
    this.http.postdata('api/setup_router/postData',this.adminform.value)
    .subscribe(result => {
      console.log(result);
      this.getData();
    })
  }
}
