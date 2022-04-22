import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/compat/firestore";


@Injectable()

export class homeService{

    res:any[]=[];
    
    constructor(private fire:AngularFirestore){}

    // VALIDAZIONE CAMPI REGISTRAZIONE 

    //Da inserire controllo nickname database 
    checkNickNameDB(nickname:string){
        
        this.getAllUsers().subscribe((response)=>{
            this.res=response.map((elemento:any)=>{
                if(elemento.payload.doc.data().nickname === nickname) return 1
                return 2
            })
            this.nicknameIsValid(nickname);   
        });
        
        
    }

    nicknameIsValid(nickname:string){
        var format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
        var valid;
        
        
        
        (nickname != "" && !format.test(nickname) && !this.res.includes(1))?valid=true:valid=false;
        return valid 
    }
    passwordIsValid(password:string){
        if(password.length > 8) return true
        else return false

    }


    //OPERAZIONI DB FIREBASE  

    //Registrazione utente su db firebase 
    on_AddUser(user:any){
         this.fire.collection("Users").add(user)
    }

    getAllUsers(){
        return this.fire.collection("Users").snapshotChanges();
    }
}