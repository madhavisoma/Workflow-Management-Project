import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent implements OnInit {

  bool = false;
  obj: any;
  url:any;
  images: string = '';
  src: string = 'data:image/jpg;base64,';
  constructor(private http: HttpService) { }

  ngOnInit(): void {
  }

  onFileSelected(event:any){
    let selectedFile: File = <File>event.target.files[0];
    console.log(selectedFile);
    const fd = new FormData;
    fd.append('image',selectedFile,selectedFile.name);

    this.http.postdata('api/img_router/img_controller',fd)
    .subscribe(result => {
      console.log(result);
      this.bool=true;
      this.url = result;
      this.src = this.src+this.url;
    })
  }

  onSelectedFile(e: any){
    if(e.target.files){
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (event:any) => {
        this.url = event.target.result;
        console.log(this.url);
      }
    }
  }

}
