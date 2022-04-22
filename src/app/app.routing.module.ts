import { Component } from "@angular/core";
import { Routes } from "@angular/router";
import { LogInComponentComponent } from "./log-in-component/log-in-component.component";
import { SignInComponentComponent } from "./sign-in-component/sign-in-component.component";
import { PlayComponentComponent } from "./play-component/play-component.component";
import { HomeComponent } from "./home/home.component";

export const appRoutes:Routes=[
    {path:"login",component:LogInComponentComponent},
    {path:"signin",component:SignInComponentComponent},
    {path:"play",component:PlayComponentComponent},
    {path:"home",component:HomeComponent},
    {path:"",redirectTo:"/home",pathMatch:"full"}

]

