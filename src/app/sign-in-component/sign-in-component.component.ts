import { Component, OnInit } from '@angular/core';
import { homeService } from '../home.service';

@Component({
  selector: 'app-sign-in-component',
  templateUrl: './sign-in-component.component.html',
  styleUrls: ['./sign-in-component.component.css']
})
export class SignInComponentComponent implements OnInit {
  
  user = {
    nickname:"",
    password:"",
    level:1,
    inventory:{
      rock:1
    }
  }
  nicknameIsValid=true;
  passwordIsValid=false;
  checkComplete=true;
  nicknameExist=false;

  constructor(private homeService:homeService) {
    
   }

  ngOnInit(): void {
    
  }
  onBlurNickname(){
    
    this.homeService.checkNickNameDB(this.user.nickname)
    setTimeout(()=>{ 
      this.nicknameIsValid=this.homeService.nicknameIsValid(this.user.nickname); 
      (this.nicknameIsValid || !(this.user.nickname != ""))? "": this.nicknameExist=true; //Bedge per nome gia' utilzzato 
    },500);
    
  }

  onNicknameChange(){//da terminare 
    this.nicknameExist=false;
    this.nicknameIsValid=this.homeService.nicknameIsValid(this.user.nickname)
    this.onComplete()
    
  }
  onPasswordChange(){//da terminare 
    this.passwordIsValid=this.homeService.passwordIsValid(this.user.password)
    this.onComplete()
  }
  onComplete(){  // Quando i controlli di nickname e password sono completi abilita il bottone per la registrazione 
    (this.nicknameIsValid && this.passwordIsValid)?this.checkComplete=false:this.checkComplete=true
  }

  onSignin(){ //Inserisce l'utente nel db utilizzando il service 
    this.homeService.on_AddUser(this.user)
  }
}
