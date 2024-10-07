import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import * as jspdf from 'jspdf';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent implements OnInit {

  @ViewChild('content', {static: false}) el!: ElementRef; data: any;
  para = `
          This Statement of Work # SO W_2021_AFS_157 effective as of the last date signed below (“Effective
          Date”) is entered by and between Arab Financial Services Co. B.S.C (c) duly incorporated and
          operating under the laws of Bahrain, registered under commercial register number 14777, legal
          address 1201, 12th Floor, Bahrain Financial Harbour, East Tower, Manama, P.O Box 2152,
          Bahrain ("AFS”) and Finsol Consultancy Pvt. Limited, a company incorporated in India under
          number U72200TN2003PTC050972 and whose registered office is at No.7(0),No.11(N), Santhi
          Nagar, 4th Street, Adambakkam, Chennai - 600 088, India (“Supplier” or “Finsol”), pursuant to
          the Master Services Agreement dated 17th day of November, 2015 signed between AFS and the
          Supplier (“Master Agreement”). This Statement of Work # SOW_2021_AFS_157 (“SOW”)
          incorporates by reference all the terms and conditions of the Master Agreement and is subject to
          terms and condition of Master Agreement.
  `;

  constructor(private http: HttpService, private router: Router) { }

  ngOnInit(): void {
    this.http.getData('api/EffortEstimation_router/get_effort')
    .subscribe(result => {
      console.log(result);
      this.data = result;
      console.log(this.data[0]);
    })
  }

  makePDF(){
    let pdf  = new jspdf.jsPDF('p','pt','a3');
    pdf.html(this.el.nativeElement,{
      callback: (pdf)=> {
        pdf.save("demo.pdf");
      }
    });
    this.router.navigateByUrl('/masters/newproj');
  }

}
