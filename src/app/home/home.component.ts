import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { homeService } from '../home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  leaderboard:any[]=[]
  constructor(private homeService:homeService,private route:Router) { }

  ngOnInit(): void {
    //CONTROLLO UTENTE GIA' LOGGATO
      (localStorage.getItem('nick'))?this.route.navigate(["/play"]):"" 

    //LEADERBOARD LOAD FROM DB 
    this.homeService.getAllUsers().subscribe((response)=>{
      this.leaderboard=response.map((elemento:any)=>{
          return elemento.payload.doc.data()
      })
      this.leaderboard.sort((a,b) => b.level - a.level);   
  });
  }


}
