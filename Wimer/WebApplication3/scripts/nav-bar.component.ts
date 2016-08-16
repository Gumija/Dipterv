import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router-deprecated';
import { RouterLink } from '@angular/router-deprecated';

@Component({
    selector: 'nav-bar-component',
    providers: [],
    templateUrl: '../views/nav-bar.html',
    styleUrls: ['../styles/nav-bar.css'],
    directives: [RouterLink]
})
export class NavBarComponent {
    
}