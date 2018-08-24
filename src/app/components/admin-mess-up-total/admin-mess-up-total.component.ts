import { Component, OnInit } from '@angular/core'
import {Router} from '@angular/router'
import {FlashMessagesService} from 'angular2-flash-messages'
import {AuthService} from '../../services/auth.service'
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner'
import {Http , HttpModule} from '@angular/http'
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {DataSource} from '@angular/cdk/table';
import { CdkTableModule } from '@angular/cdk/table';
import {MatGridListModule} from '@angular/material/grid-list';

@Component({
  selector: 'app-admin-mess-up-total',
  templateUrl: './admin-mess-up-total.component.html',
  styleUrls: ['./admin-mess-up-total.component.css']
})
export class AdminMessUpTotalComponent implements OnInit {

  users: any;
  displayedColumns: any;
  messUp: any;
  breakfastUp: any;
  lunchUp: any;
  dinnerUp: any;
  message:any;
  i: any;
  days: any;
  breakfastCounter: any;

  monBrVegCounter : any;
  monLunVegCounter : any;
  monDinVegCounter: any;
  tuesBrVegCounter: any;
  tuesLunVegCounter: any;
  tuesDinVegCounter: any;
  wedBrVegCounter: any;
  wedLunVegCounter: any;
  wedDinVegCounter: any;
  thuBrVegCounter: any;
  thuLunVegCounter: any;
  thuDinVegCounter: any;
  friBrVegCounter: any;
  friLunVegCounter: any
  friDinVegCounter: any;
  satBrVegCounter: any;
  satLunVegCounter: any;
  satDinVegCounter: any;
  sunBrVegCounter: any;
  sunLunVegCounter: any;
  sunDinVegCounter: any;

  // Non-veg
  // Non veg
  monBrNonVegCounter : any;
  monLunNonVegCounter : any;
  monDinNonVegCounter: any;
  tuesBrNonVegCounter: any;
  tuesLunNonVegCounter: any;
  tuesDinNonVegCounter: any;
  wedBrNonVegCounter: any;
  wedLunNonVegCounter: any;
  wedDinNonVegCounter: any;
  thuBrNonVegCounter: any;
  thuLunNonVegCounter: any;
  thuDinNonVegCounter: any;
  friBrNonVegCounter: any;
  friLunNonVegCounter: any
  friDinNonVegCounter: any;
  satBrNonVegCounter: any;
  satLunNonVegCounter: any;
  satDinNonVegCounter: any;
  sunBrNonVegCounter: any;
  sunLunNonVegCounter: any;
  sunDinNonVegCounter: any;

  resultArr: any;
  finalArr: any;

  constructor(
    private router: Router,
    private authService: AuthService,
    private flashMessage: FlashMessagesService,
    private http: Http,
    private spinnerService: Ng4LoadingSpinnerService
  ) {
  this.i =0; }

  ngOnInit() {
    const Info =this.authService.loadUserInfo();
    if (Info.userType !== "admin") {
      this.flashMessage.show("You must be a admin to access this page", {cssClass: 'alert-danger', timeout: 5000})
      this.router.navigate(['/'])
    } else if (Info.messType !== "mess2") {
      this.flashMessage.show("You cannot access this page", {cssClass: 'alert-danger', timeout: 5000})
      this.router.navigate(['/adminMess1Users'])
    }
    else {
      this.authService.getUsersmessUp().subscribe(data=>{
        if (data.data.success) {
          this.messUp= data.data.users

          // BreakFast Veg
          this.monBrVegCounter = this.messUp.map(t => t.couponUpMess.map(val => val.messup.map((t,index) => (t.day === "Monday" && t.breakfast)).filter(val=> {return val === "veg"})[0] )).
          filter( val => { return val[0] === "veg"}).length;

          this.tuesBrVegCounter = this.messUp.map(t => t.couponUpMess.map(val => val.messup.map((t,index) => (t.day === "Tuesday" && t.breakfast)).filter(val=> {return val === "veg"})[0] )).
          filter( val => { return val[0] === "veg"}).length;

          this.wedBrVegCounter = this.messUp.map(t => t.couponUpMess.map(val => val.messup.map((t,index) => (t.day === "Wednesday" && t.breakfast)).filter(val=> {return val === "veg"})[0] )).
          filter( val => { return val[0] === "veg"}).length;

          this.thuBrVegCounter = this.messUp.map(t => t.couponUpMess.map(val => val.messup.map((t,index) => (t.day === "Thursday" && t.breakfast)).filter(val=> {return val === "veg"})[0] )).
          filter( val => { return val[0] === "veg"}).length;

          this.friBrVegCounter = this.messUp.map(t => t.couponUpMess.map(val => val.messup.map((t,index) => (t.day === "Friday" && t.breakfast)).filter(val=> {return val === "veg"})[0] )).
          filter( val => { return val[0] === "veg"}).length;

          this.satBrVegCounter = this.messUp.map(t => t.couponUpMess.map(val => val.messup.map((t,index) => (t.day === "Saturday" && t.breakfast)).filter(val=> {return val === "veg"})[0] )).
          filter( val => { return val[0] === "veg"}).length;

          this.sunBrVegCounter = this.messUp.map(t => t.couponUpMess.map(val => val.messup.map((t,index) => (t.day === "Sunday" && t.breakfast)).filter(val=> {return val === "veg"})[0] )).
          filter( val => { return val[0] === "veg"}).length;

          // BreakFast non-Veg
          this.monBrNonVegCounter = this.messUp.map(t => t.couponUpMess.map(val => val.messup.map((t,index) => (t.day === "Monday" && t.breakfast)).filter(val=> {return val === "veg"})[0] )).
          filter( val => { return val[0] === "nonVeg"}).length;

          this.tuesBrNonVegCounter = this.messUp.map(t => t.couponUpMess.map(val => val.messup.map((t,index) => (t.day === "Tuesday" && t.breakfast)).filter(val=> {return val === "nonVeg"})[0] )).
          filter( val => { return val[0] === "nonVeg"}).length;

          this.wedBrNonVegCounter = this.messUp.map(t => t.couponUpMess.map(val => val.messup.map((t,index) => (t.day === "Wednesday" && t.breakfast)).filter(val=> {return val === "nonVeg"})[0] )).
          filter( val => { return val[0] === "nonVeg"}).length;

          this.thuBrNonVegCounter = this.messUp.map(t => t.couponUpMess.map(val => val.messup.map((t,index) => (t.day === "Thursday" && t.breakfast)).filter(val=> {return val === "nonVeg"})[0] )).
          filter( val => { return val[0] === "nonVeg"}).length;

          this.friBrNonVegCounter = this.messUp.map(t => t.couponUpMess.map(val => val.messup.map((t,index) => (t.day === "Friday" && t.breakfast)).filter(val=> {return val === "nonVeg"})[0] )).
          filter( val => { return val[0] === "nonVeg"}).length;

          this.satBrNonVegCounter = this.messUp.map(t => t.couponUpMess.map(val => val.messup.map((t,index) => (t.day === "Saturday" && t.breakfast)).filter(val=> {return val === "nonVeg"})[0] )).
          filter( val => { return val[0] === "nonVeg"}).length;

          this.sunBrNonVegCounter = this.messUp.map(t => t.couponUpMess.map(val => val.messup.map((t,index) => (t.day === "Sunday" && t.breakfast)).filter(val=> {return val === "nonVeg"})[0] )).
          filter( val => { return val[0] === "nonVeg"}).length;



          // Lunch Veg
          this.monLunVegCounter = this.messUp.map(t => t.couponUpMess.map(val => val.messup.map((t,index) => (t.day === "Monday" && t.lunch)).filter(val=> {return val === "veg"})[0] )).
          filter( val => { return val[0] === "veg"}).length;

          this.tuesLunVegCounter = this.messUp.map(t => t.couponUpMess.map(val => val.messup.map((t,index) => (t.day === "Tuesday" && t.lunch)).filter(val=> {return val === "veg"})[0] )).
          filter( val => { return val[0] === "veg"}).length;

          this.wedLunVegCounter = this.messUp.map(t => t.couponUpMess.map(val => val.messup.map((t,index) => (t.day === "Wednesday" && t.lunch)).filter(val=> {return val === "veg"})[0] )).
          filter( val => { return val[0] === "veg"}).length;

          this.thuLunVegCounter = this.messUp.map(t => t.couponUpMess.map(val => val.messup.map((t,index) => (t.day === "Thursday" && t.lunch)).filter(val=> {return val === "veg"})[0] )).
          filter( val => { return val[0] === "veg"}).length;

          this.friLunVegCounter = this.messUp.map(t => t.couponUpMess.map(val => val.messup.map((t,index) => (t.day === "Friday" && t.lunch)).filter(val=> {return val === "veg"})[0] )).
          filter( val => { return val[0] === "veg"}).length;

          this.satLunVegCounter = this.messUp.map(t => t.couponUpMess.map(val => val.messup.map((t,index) => (t.day === "Saturday" && t.lunch)).filter(val=> {return val === "veg"})[0] )).
          filter( val => { return val[0] === "veg"}).length;

          this.sunLunVegCounter = this.messUp.map(t => t.couponUpMess.map(val => val.messup.map((t,index) => (t.day === "Sunday" && t.lunch)).filter(val=> {return val === "veg"})[0] )).
          filter( val => { return val[0] === "veg"}).length;


          // Lun non-Veg
          this.monLunNonVegCounter = this.messUp.map(t => t.couponUpMess.map(val => val.messup.map((t,index) => (t.day === "Monday" && t.lunch)).filter(val=> {return val === "veg"})[0] )).
          filter( val => { return val[0] === "nonVeg"}).length;

          this.tuesLunNonVegCounter = this.messUp.map(t => t.couponUpMess.map(val => val.messup.map((t,index) => (t.day === "Tuesday" && t.lunch)).filter(val=> {return val === "nonVeg"})[0] )).
          filter( val => { return val[0] === "nonVeg"}).length;

          this.wedLunNonVegCounter = this.messUp.map(t => t.couponUpMess.map(val => val.messup.map((t,index) => (t.day === "Wednesday" && t.lunch)).filter(val=> {return val === "nonVeg"})[0] )).
          filter( val => { return val[0] === "nonVeg"}).length;

          this.thuLunNonVegCounter = this.messUp.map(t => t.couponUpMess.map(val => val.messup.map((t,index) => (t.day === "Thursday" && t.lunch)).filter(val=> {return val === "nonVeg"})[0] )).
          filter( val => { return val[0] === "nonVeg"}).length;

          this.friLunNonVegCounter = this.messUp.map(t => t.couponUpMess.map(val => val.messup.map((t,index) => (t.day === "Friday" && t.lunch)).filter(val=> {return val === "nonVeg"})[0] )).
          filter( val => { return val[0] === "nonVeg"}).length;

          this.satLunNonVegCounter = this.messUp.map(t => t.couponUpMess.map(val => val.messup.map((t,index) => (t.day === "Saturday" && t.lunch)).filter(val=> {return val === "nonVeg"})[0] )).
          filter( val => { return val[0] === "nonVeg"}).length;

          this.sunLunNonVegCounter = this.messUp.map(t => t.couponUpMess.map(val => val.messup.map((t,index) => (t.day === "Sunday" && t.lunch)).filter(val=> {return val === "nonVeg"})[0] )).
          filter( val => { return val[0] === "nonVeg"}).length;



          // Dinner Veg
          this.monDinVegCounter = this.messUp.map(t => t.couponUpMess.map(val => val.messup.map((t,index) => (t.day === "Monday" && t.dinner)).filter(val=> {return val === "veg"})[0] )).
          filter( val => { return val[0] === "veg"}).length;

          this.tuesDinVegCounter = this.messUp.map(t => t.couponUpMess.map(val => val.messup.map((t,index) => (t.day === "Tuesday" && t.dinner)).filter(val=> {return val === "veg"})[0] )).
          filter( val => { return val[0] === "veg"}).length;

          this.wedDinVegCounter = this.messUp.map(t => t.couponUpMess.map(val => val.messup.map((t,index) => (t.day === "Wednesday" && t.dinner)).filter(val=> {return val === "veg"})[0] )).
          filter( val => { return val[0] === "veg"}).length;

          this.thuDinVegCounter = this.messUp.map(t => t.couponUpMess.map(val => val.messup.map((t,index) => (t.day === "Thursday" && t.dinner)).filter(val=> {return val === "veg"})[0] )).
          filter( val => { return val[0] === "veg"}).length;

          this.friDinVegCounter = this.messUp.map(t => t.couponUpMess.map(val => val.messup.map((t,index) => (t.day === "Friday" && t.dinner)).filter(val=> {return val === "veg"})[0] )).
          filter( val => { return val[0] === "veg"}).length;

          this.satDinVegCounter = this.messUp.map(t => t.couponUpMess.map(val => val.messup.map((t,index) => (t.day === "Saturday" && t.dinner)).filter(val=> {return val === "veg"})[0] )).
          filter( val => { return val[0] === "veg"}).length;

          this.sunDinVegCounter = this.messUp.map(t => t.couponUpMess.map(val => val.messup.map((t,index) => (t.day === "Sunday" && t.dinner)).filter(val=> {return val === "veg"})[0] )).
          filter( val => { return val[0] === "veg"}).length;


          // Dinner non-Veg
          this.monDinNonVegCounter = this.messUp.map(t => t.couponUpMess.map(val => val.messup.map((t,index) => (t.day === "Monday" && t.dinner)).filter(val=> {return val === "veg"})[0] )).
          filter( val => { return val[0] === "nonVeg"}).length;

          this.tuesDinNonVegCounter = this.messUp.map(t => t.couponUpMess.map(val => val.messup.map((t,index) => (t.day === "Tuesday" && t.dinner)).filter(val=> {return val === "nonVeg"})[0] )).
          filter( val => { return val[0] === "nonVeg"}).length;

          this.wedDinNonVegCounter = this.messUp.map(t => t.couponUpMess.map(val => val.messup.map((t,index) => (t.day === "Wednesday" && t.dinner)).filter(val=> {return val === "nonVeg"})[0] )).
          filter( val => { return val[0] === "nonVeg"}).length;

          this.thuDinNonVegCounter = this.messUp.map(t => t.couponUpMess.map(val => val.messup.map((t,index) => (t.day === "Thursday" && t.dinner)).filter(val=> {return val === "nonVeg"})[0] )).
          filter( val => { return val[0] === "nonVeg"}).length;

          this.friDinNonVegCounter = this.messUp.map(t => t.couponUpMess.map(val => val.messup.map((t,index) => (t.day === "Friday" && t.dinner)).filter(val=> {return val === "nonVeg"})[0] )).
          filter( val => { return val[0] === "nonVeg"}).length;

          this.satDinNonVegCounter = this.messUp.map(t => t.couponUpMess.map(val => val.messup.map((t,index) => (t.day === "Saturday" && t.dinner)).filter(val=> {return val === "nonVeg"})[0] )).
          filter( val => { return val[0] === "nonVeg"}).length;

          this.sunDinNonVegCounter = this.messUp.map(t => t.couponUpMess.map(val => val.messup.map((t,index) => (t.day === "Sunday" && t.dinner)).filter(val=> {return val === "nonVeg"})[0] )).
          filter( val => { return val[0] === "nonVeg"}).length;

          this.displayedColumns = ['day','vegBr','nonBr','vegLun','nonLun', 'vegDin','nonDin'];
          const resultArr = []
          resultArr.push({
            day: 'Monday',
            vegBr: this.monBrVegCounter,
            nonBr: this.monBrNonVegCounter,
            vegLun: this.monLunVegCounter,
            nonLun: this.monLunNonVegCounter,
            vegDin: this.monDinVegCounter,
            nonDin: this.monDinNonVegCounter
          },
          {
            day: 'Tuesday',
            vegBr: this.tuesBrVegCounter,
            nonBr: this.tuesBrNonVegCounter,
            vegLun: this.tuesLunVegCounter,
            nonLun: this.tuesLunNonVegCounter,
            vegDin: this.tuesDinVegCounter,
            nonDin: this.tuesDinNonVegCounter
          },
          {
            day: 'Wednesday',
            vegBr: this.wedBrVegCounter,
            nonBr: this.wedBrNonVegCounter,
            vegLun: this.wedLunVegCounter,
            nonLun: this.wedLunNonVegCounter,
            vegDin: this.wedDinVegCounter,
            nonDin: this.wedDinNonVegCounter
          },
          {
            day: 'Thursday',
            vegBr: this.thuBrVegCounter,
            nonBr: this.thuBrNonVegCounter,
            vegLun: this.thuLunVegCounter,
            nonLun: this.thuLunNonVegCounter,
            vegDin: this.thuDinVegCounter,
            nonDin: this.thuDinNonVegCounter
          },
          {
            day: 'Friday',
            vegBr: this.friBrVegCounter,
            nonBr: this.friBrNonVegCounter,
            vegLun: this.friLunVegCounter,
            nonLun: this.friLunNonVegCounter,
            vegDin: this.friDinVegCounter,
            nonDin: this.friDinNonVegCounter
          },
          {
            day: 'Saturday',
            vegBr: this.satBrVegCounter,
            nonBr: this.satBrNonVegCounter,
            vegLun: this.satLunVegCounter,
            nonLun: this.satLunNonVegCounter,
            vegDin: this.satDinVegCounter,
            nonDin: this.satDinNonVegCounter
          },
          {
            day: 'Sunday',
            vegBr: this.sunBrVegCounter,
            nonBr: this.sunBrNonVegCounter,
            vegLun: this.sunLunVegCounter,
            nonLun: this.sunLunNonVegCounter,
            vegDin: this.sunDinVegCounter,
            nonDin: this.sunDinNonVegCounter
          })

          this.finalArr = resultArr

        } else {
          this.message = data.message
        }
      })
    }
  }
  
  print() {
    var divToPrint = document.getElementById('print-section');
    var htmlToPrint = '' +
        '<style type="text/css">' +
        'table , table td {' +
        'border:1px solid #000;' +
        'padding:0.5em;' +
        'width: 900px;' +
        '}' +
        '</style>';
    htmlToPrint += divToPrint.outerHTML;
    var newWin = window.open("");
    newWin.document.write(htmlToPrint);
    newWin.print();
    newWin.close();
  }


}