import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.scss']
})
export class FileUploaderComponent implements OnInit {

  constructor(private http: HttpService, private formbuilder: FormBuilder) { }

  bool = false;
  url='';
  page=1;
  data: any;
  name: any;
  type = '';
  data_string = '';
  adminform!: FormGroup;

  ngOnInit(): void {
    this.adminform = this.formbuilder.group({
        name: this.formbuilder.control('')
    })
  }

  onSelectedFile(event: any){
    let selectedfile:File = <File>event.target.files[0];
    console.log(selectedfile);
    console.log(selectedfile.name);
    const fd = new FormData();
    fd.append('image',selectedfile,selectedfile.name);
    this.http.postdata('api/img_router/pdf_path',fd)
    .subscribe(res => {})
  }

  onSubmit(){
    console.log(this.adminform.value);
    this.http.postdata('api/img_router/pdf_controller',this.adminform.value)
    .subscribe(data => {
      console.log(data);
    })
  }

}
