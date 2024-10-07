import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-effortestimation',
  templateUrl: './effortestimation.component.html',
  styleUrls: ['./effortestimation.component.scss'],
})
export class EffortestimationComponent implements OnInit {
  constructor(private formbuilder: FormBuilder, private http: HttpService, private router: Router) {}

  display: any;
  adminform!: FormGroup;

  ngOnInit(): void {
    this.http
      .getData('api/Activity_router/get_activity')
      .subscribe((result) => {
        console.log(result);
        this.display = result;
      });
      this.adminform = this.formbuilder.group({
        Effort_Estimation: this.formbuilder.control(''),
        Development: this.formbuilder.control(''),
        Implementation_Preperations: this.formbuilder.control(''),
        Certification_Support: this.formbuilder.control(''),
        Region_build: this.formbuilder.control(''),
        QA: this.formbuilder.control(''),
        QA_Support: this.formbuilder.control(''),
        UAT_Support: this.formbuilder.control(''),
        Delivery_Documents: this.formbuilder.control(''),
        Production_Move_Sheet: this.formbuilder.control(''),
        Warranty_Support: this.formbuilder.control(''),
        PMO: this.formbuilder.control('')
      })
  }

  onSubmit(){
    console.log(this.adminform.value);
    this.http.postdata('api/EffortEstimation_router/post_effort',this.adminform.value)
    .subscribe(result => {
      console.log(result);
    })

    // this.router.navigateByUrl('/masters/temp');
  }

}
