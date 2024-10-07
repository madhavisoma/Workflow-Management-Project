import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-projectmaster',
  templateUrl: './projectmaster.component.html',
  styleUrls: ['./projectmaster.component.scss']
})
export class ProjectmasterComponent implements OnInit {

  dataSource: any;
  displayedColoumns: string[] = ['No','Number','Name','Bank','ProjectManager','StartDate','EndDate'];
  constructor(private http:HttpService, private formbuilder:FormBuilder) { }

  adminform!:FormGroup;
  ngOnInit(): void {
    this.adminform = this.formbuilder.group({
      number: this.formbuilder.control(''),
      name: this.formbuilder.control(''),
      bank: this.formbuilder.control(''),
      projectmanager: this.formbuilder.control(''),
      startdate: this.formbuilder.control(''),
      enddate: this.formbuilder.control('')
    })

    this.get_projectall();
  }

  get_projectall(){
    this.http.getData('api/Project_router/get_allproj')
    .subscribe(result=>{
      console.log(result);
      this.dataSource = result;
    })
  }

  onSubmit(){
    console.log(this.adminform.value);
    this.http.postdata('api/Project_router/projectmaster',this.adminform.value)
    .subscribe(result => {
      console.log(result);
      this.get_projectall();
    })
  }

}
