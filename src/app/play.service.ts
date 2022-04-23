import { Injectable, OnInit } from "@angular/core";
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { User } from "../environments/userType";
import { Inventory } from "../environments/userType";
import { homeService } from "./home.service";


@Injectable()



export class playService implements OnInit {

     userObj:User={
         nickname: "",
         password: "",
         level: 0,
         inventory:<Inventory> {

         }

     }
    constructor(private homeService:homeService ,private fire:AngularFirestore){this.homeService.getUserObj();}
    ngOnInit(): void {
        
    }

    onAddRock(){
        var userID=localStorage.getItem("idUser");
        
        if(this.homeService.loading===false){
            this.userObj=this.homeService.userObj;
            this.userObj.inventory.rock=this.userObj.inventory.rock+1
            this.fire.collection("Users").doc(userID!).update(this.userObj)
        }else{
            setTimeout(()=>{this.onAddRock()},100)
        }
        
       
        
        
    }


}