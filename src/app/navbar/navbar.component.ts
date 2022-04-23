import { Component, OnInit } from '@angular/core';
import { navBarService } from '../navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  

  constructor(public navController:navBarService) { }
  
  ngOnInit(): void {
  }

}
