import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { Inventory, User } from "../environments/userType";


@Injectable()

export class homeService{

    res:any[]=[];
    loginConfirm:any[]=[]
    userObj:User={
        nickname: "",
        password: "",
        level: 0,
        inventory:<Inventory> {

        }

    }
    loading=true;
    constructor(private fire:AngularFirestore){
        this.getUserObj()
    }

    // VALIDAZIONE CAMPI REGISTRAZIONE 

    //Da inserire controllo nickname database /Fatto! bravo Renato Detto da Renato 
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


    //VALIDAZIONE LOGIN 
    onLogin(nickname:string,password:string){
        this.getAllUsers().subscribe((response)=>{
            this.loginConfirm=response.map((elemento:any)=>{
                if(elemento.payload.doc.data().nickname === nickname) {
                    if(elemento.payload.doc.data().password === password){
                        localStorage.setItem('idUser', elemento.payload.doc.id);//IMPORTANTE SALVA ID UTENTE LOGGATO IN LOCALSTORAGE
                        
                        return true
                    }
                }
                return false
            })
               
        });
        return this.loginConfirm
    }


    //OPERAZIONI DB FIREBASE  

    //Registrazione utente su db firebase 
    on_AddUser(user:any){
         this.fire.collection("Users").add(user)
    }

    getAllUsers(){
        return this.fire.collection("Users").snapshotChanges();
    }

    getUserObj(){
        this.loading=true;
        var userID=localStorage.getItem("idUser");
        this.getAllUsers().subscribe((response)=>{
            this.res=response.map((elemento:any)=>{
            (elemento.payload.doc.id === userID) ?this.userObj=elemento.payload.doc.data() :""
                
            })
            this.loading=false;
        });
        
    }
}