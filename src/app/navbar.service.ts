import { Injectable } from "@angular/core";

@Injectable()

export class navBarService {
    showMenuPlay=false;
    constructor(){}
    
    onUserLogin(){
        this.showMenuPlay=true;
    }
    onUserLogout(){
        localStorage.clear();
        this.showMenuPlay=false;
    }
}