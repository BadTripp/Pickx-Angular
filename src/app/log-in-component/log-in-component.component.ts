import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { homeService } from '../home.service';


@Component({
  selector: 'app-log-in-component',
  templateUrl: './log-in-component.component.html',
  styleUrls: ['./log-in-component.component.css']
})
export class LogInComponentComponent implements OnInit {

  userNickname=""
  userPassword=""
  error=false;

  constructor(private route:Router,private homeService:homeService) { }

  ngOnInit(): void {
  }


  errorReset(){
    this.error=false
  }
  onLoginComplete(){

    (this.homeService.onLogin(this.userNickname,this.userPassword).includes(true))?this.route.navigate(["/play"]):this.error=true
    
  }

}
