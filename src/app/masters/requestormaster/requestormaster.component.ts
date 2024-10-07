import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-requestormaster',
  templateUrl: './requestormaster.component.html',
  styleUrls: ['./requestormaster.component.scss']
})
export class RequestormasterComponent implements OnInit {

  dataSource:any;
  displayedColoumns: string[] = ['id','requestor','authorizer','role'];
  constructor(private http: HttpService, private formbuilder: FormBuilder) { }

  adminform!:FormGroup;
  ngOnInit(): void {
    this.adminform = this.formbuilder.group({
      requestor:this.formbuilder.control(''),
      authorizer:this.formbuilder.control(''),
      role:this.formbuilder.control('')
    })
    this.get_requestor();
  }

  onSubmit(){
    this.http.postdata('api/Request_router/requestormaster',this.adminform.value)
    .subscribe(result => {
      if(result!=''){
        alert('Details successfully entered!');
        this.get_requestor();
        this.adminform.reset();
      }
    })
  }

  get_requestor(){
    this.http.getData('api/Request_router/get_reqmaster')
    .subscribe(result => {
      this.dataSource = result;
    })
  }
}
