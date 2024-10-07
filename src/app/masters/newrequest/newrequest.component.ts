import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-newrequest',
  templateUrl: './newrequest.component.html',
  styleUrls: ['./newrequest.component.scss']
})
export class NewrequestComponent implements OnInit {

  constructor(private formbuilder:FormBuilder, private http: HttpService) { }

  displayedColoumns: string[] = ['id','ReqId','Task','Requestor','ReqDate'];
  display:any = [];
  dataSource: any;
  requestors:any = [];
  adminform!:FormGroup;
  date = new Date().getDay();
  ngOnInit(): void {
    this.adminform = this.formbuilder.group({
      reqids: this.formbuilder.control(''),
      task: this.formbuilder.control(''),
      requestor: this.formbuilder.control(''),
      reqdate: this.formbuilder.control('')
    })
    this.reqid();
    this.reqdetails();
    this.get_requestor();
  }

  reqdetails() {
    this.http.getData('api/NewRequest_router/getreq_details')
    .subscribe(result => {
      this.display = result;
      this.dataSource = result;
      console.log(this.display);
    })
  }

  reqid(){
    this.http.getData('api/NewRequest_router/reqid')
    .subscribe(result => {
      console.log(result);
      this.adminform.patchValue({
        reqids: result
      })
    })
  }

  get_requestor(){
    this.http.getData('api/Request_router/get_reqmaster')
    .subscribe(result => {
      this.requestors = result;
    })
  }

  onSubmit(){
    console.log(this.adminform.value);
    this.http.postdata('api/NewRequest_router/newreq',this.adminform.value)
    .subscribe(result => {
      console.log(result);
      this.adminform.reset();
      alert('details successfully entered');
      this.reqid();
      this.reqdetails();
    })
  }
}
