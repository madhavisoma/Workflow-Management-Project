import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-bankmaster',
  templateUrl: './bankmaster.component.html',
  styleUrls: ['./bankmaster.component.scss']
})
export class BankmasterComponent implements OnInit {

  dataSource:any;
  displayedColumns: string[] = ['id','name','shortname','country','currency'];
  constructor(private formbuilder: FormBuilder, private http: HttpService) { }

  countries: any;
  currencies:any;

  adminform!: FormGroup;
  ngOnInit(): void {
    this.adminform = this.formbuilder.group({
      name: this.formbuilder.control(''),
      shortname: this.formbuilder.control(''),
      country: this.formbuilder.control(''),
      currency: this.formbuilder.control('')
    })

    this.http.getData('api/bankapplication_router/getdata')
    .subscribe(result => {
      console.log(result);
      this.countries=result;
    })

    this.get_bankmaster();
  }

  OnSubmit(){
    console.log(this.adminform.value);
    this.http.postdata('api/bankapplication_router/bankmaster',this.adminform.value)
    .subscribe(result => {
      console.log(result);
      alert('Details Successfully entered');
      this.get_bankmaster();
      this.adminform.reset();
    })
  }

  showmsg(){
    console.log(this.adminform.get('country')?.value);
    this.http.postdata('api/bankapplication_router/getcurrency',{country:this.adminform.get('country')?.value})
    .subscribe(results => {
      console.log(results);
      this.currencies = results;
      this.adminform.patchValue({
        currency: this.currencies.currency
      })
    })
  }

  get_bankmaster(){
    this.http.getData('api/bankapplication_router/get_bank')
    .subscribe(data => {
      this.dataSource = data;
    })
  }
}
