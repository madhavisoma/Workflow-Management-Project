import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-activitymaster',
  templateUrl: './activitymaster.component.html',
  styleUrls: ['./activitymaster.component.scss'],
})
export class ActivitymasterComponent implements OnInit {
  pdfSrc="../../../assets/PranavPayment.pdf";
  dataSource: any;
  displayedColoumns: string[] = ['id', 'activity', 'cost', 'unit'];
  constructor(private http: HttpService, private formbuilder: FormBuilder) {}


  adminform!: FormGroup;
  ngOnInit(): void {
    this.adminform = this.formbuilder.group({
      activity: this.formbuilder.control(''),
      cost: this.formbuilder.control(''),
      unit: this.formbuilder.control(''),
    });
    this.get_activity();
  }

  onSubmit() {
    console.log(this.adminform.value);
    this.http
      .postdata(
        'api/Activity_router/activitymaster',
        this.adminform.value
      )
      .subscribe((result) => {
        console.log(result);
        alert('Details entered successfully!');
        this.adminform.reset();
        this.get_activity();
      });
  }

  get_activity() {
    this.http
      .getData('api/Activity_router/get_activity')
      .subscribe((result) => {
        console.log(result);
        this.dataSource = result;
      });
  }

}
