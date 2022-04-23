import { Component, OnInit } from '@angular/core';
import { navBarService } from '../navbar.service';
import { playService } from '../play.service';

@Component({
  selector: 'app-play-component',
  templateUrl: './play-component.component.html',
  styleUrls: ['./play-component.component.css']
})
export class PlayComponentComponent implements OnInit {

  userNickname:any
  constructor(private playService:playService,private navController:navBarService) {
    
   }

  ngOnInit(): void {
    this.userNickname=localStorage.getItem('nick');
    this.navController.onUserLogin()
    
  }

}
