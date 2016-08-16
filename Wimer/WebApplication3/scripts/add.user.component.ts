import {Component, OnInit} from '@angular/core';
import {UserService} from './Service/user.service';
import {User} from './Entity/user';

@Component({
    selector: 'add-user',
    providers: [UserService],
    templateUrl: '../views/adduser.html',
})
export class AddUserComponent implements OnInit {
    users: User[];
    errorMessage: string;


    constructor(private userService: UserService) { }

    updateList() {
        this.userService.getUsers().subscribe(
            users => this.users = users,
            error => this.errorMessage = <any>error);
    }

    getUsers() {
        this.userService.getUsers().subscribe(
            users => this.users = users,
            error => this.errorMessage = <any>error);
    }

    ngOnInit() {
        this.getUsers();
    }
}