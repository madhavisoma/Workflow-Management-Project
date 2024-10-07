import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-employeemaster',
  templateUrl: './employeemaster.component.html',
  styleUrls: ['./employeemaster.component.scss']
})
export class EmployeemasterComponent implements OnInit {

  dataSource:any;
  displayedColumns: string[] = ['id','empid','name','role','contactnumber','emailid','cost'];
  constructor(private formbuilder: FormBuilder, private http: HttpService) { }

  adminform!:FormGroup;
  ngOnInit(): void {
    this.adminform = this.formbuilder.group({
      empid: this.formbuilder.control(''),
      name: this.formbuilder.control(''),
      role: this.formbuilder.control(''),
      contactnumber: this.formbuilder.control(''),
      EmailID: this.formbuilder.control(''),
      cost: this.formbuilder.control('')
    })

    this.get_Employeemaster();
  }

  onSubmit(){
    this.http.postdata('api/Employee_router/employeemaster',this.adminform.value)
    .subscribe(result => {
      console.log(result);
      alert('Details Successfully entered!!');
      this.get_Employeemaster();
      this.adminform.reset();
    })
  }

  get_Employeemaster(){
    this.http.getData('api/Employee_router/get_Employeemaster')
    .subscribe(result => {
      this.dataSource = result;
    })
  }
}
