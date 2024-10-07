import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { HttpService } from 'src/app/services/http.service';
import { NewprojDialogComponent } from '../newproj-dialog/newproj-dialog.component';

@Component({
  selector: 'app-newproject',
  templateUrl: './newproject.component.html',
  styleUrls: ['./newproject.component.scss'],
})
export class NewprojectComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'ReqId',
    'SowNo',
    'SowVersion',
    'Bank',
    'FSD',
    'Effort',
    'Financial_quote',
    'update',
    'delete',
  ];
  fd = new FormData();
  str = 'Enter Valid details';
  urls = '';
  bool = false ;
  data_field: any;
  fakepath: any;
  dataSource: any;
  pdfSrc: any;
  id:any;
  display: any = [];
  reqid: any = [];
  bank: any = [];
  adminform!: FormGroup;

  constructor(private formbuilder: FormBuilder, private http: HttpService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.adminform = this.formbuilder.group({
      reqids: this.formbuilder.control(''),
      sowno: this.formbuilder.control(''),
      sowversion: this.formbuilder.control(''),
      bank: this.formbuilder.control(''),
      fsd: this.formbuilder.control('')
    });
    this.reqids();
    this.get_bank();
    this.get_newproj();
  }

  reqids() {
    this.http
      .getData('api/NewRequest_router/getReqId')
      .subscribe((result) => {
        this.reqid = result;
      });
  }

  get_bank() {
    this.http
      .getData('api/bankapplication_router/get_bank')
      .subscribe((result) => {
        this.bank = result;
      });
  }

  onsubmit() {
    console.log(this.adminform.value);
    this.http
      .postdata('api/NewProject_router/newproj', this.adminform.value)
      .subscribe((result) => {
          console.log(result);
          alert('Details successfully enterd');
          console.log(result);
          this.adminform.reset();
          this.get_newproj();
      });
  }

  get_newproj() {
    this.http
      .getData('api/NewProject_router/get_newproj')
      .subscribe((result) => {
        this.data_field = result;
        this.dataSource = this.data_field.result;
        console.log(this.dataSource);
        console.log(this.data_field.fsd_path);
        console.log(this.data_field.fsd_path.length);
      });
  }

  new_val(a: number) {
    console.log(a);
     this.id = a;
     alert('please enter the details in these fields!');
  }

  del(id: number){
    this.http.postdata('api/NewProject_router/del_newproj',{id:id})
    .subscribe(result => {
      console.log(result);
      alert('The field is deleted successfully');
      this.get_newproj();
    })
  }

  update(){
    console.log('the id is '+this.id);
    const obj = {
      ...this.adminform.value,
      id: this.id
    }
    this.http.postdata('api/NewProject_router/update_newproj', obj)
    .subscribe(res => {
      console.log(res);
      this.adminform.reset();
      this.get_newproj();
    })
  }

  field(){
    const val = (this.adminform.get('sowno')?.value).toString().length;
    if(val == 0){
      this.bool = true;
      alert('Enter Valid Details!');
    }
    else{
      this.bool = false;
    }
  }

  show(event:any){
    const selectedFile:File = <File>event.target.files[0];
    this.fd.append('image',selectedFile,selectedFile.name);
    console.log(selectedFile);
    this.http.postdata('api/NewProject_router/fsd_file',this.fd)
    .subscribe(result => {
      console.log(result);
    })
  }

  show_files(id: number){
    for(var i=0; i<this.data_field.fsd_path.length; i++){
      if(id==this.data_field.fsd_path[i].id){
        this.urls = 'data:application/pdf;base64,'+this.data_field.fsd_path[i].fsd;
        this.dialog.open(NewprojDialogComponent,{
          data: this.urls
        })
      }
    }
  }

}
