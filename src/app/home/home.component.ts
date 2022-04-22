import { Component, OnInit } from '@angular/core';
import { homeService } from '../home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  leaderboard:any[]=[]
  constructor(private homeService:homeService) { }

  ngOnInit(): void {
    this.homeService.getAllUsers().subscribe((response)=>{
      this.leaderboard=response.map((elemento:any)=>{
          return elemento.payload.doc.data()
      })
      this.leaderboard.sort((a,b) => b.level - a.level);   
  });
  }


}
