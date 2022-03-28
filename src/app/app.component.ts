import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-coding-assessment';
  status='Platinum Pro';
  log(x: any) {console.log(x); }
  confirmreset(){
    return confirm("Are you sure you want to reset the form")
  }


}
