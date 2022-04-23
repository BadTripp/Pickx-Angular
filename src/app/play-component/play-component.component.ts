import { Component, OnInit } from '@angular/core';
import { navBarService } from '../navbar.service';

@Component({
  selector: 'app-play-component',
  templateUrl: './play-component.component.html',
  styleUrls: ['./play-component.component.css']
})
export class PlayComponentComponent implements OnInit {

  userNickname:any
  constructor(private navController:navBarService) {
    
   }

  ngOnInit(): void {
    this.userNickname=localStorage.getItem('nick');
    this.navController.onUserLogin()
  }

}
