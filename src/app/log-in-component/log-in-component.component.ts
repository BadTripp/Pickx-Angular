import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-log-in-component',
  templateUrl: './log-in-component.component.html',
  styleUrls: ['./log-in-component.component.css']
})
export class LogInComponentComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  onLoginComplete(){
    this.route.navigate(["/play"]);
  }

}
