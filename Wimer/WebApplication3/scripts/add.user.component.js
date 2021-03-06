"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require('@angular/core');
const user_service_1 = require('./Service/user.service');
let AddUserComponent = class AddUserComponent {
    constructor(userService) {
        this.userService = userService;
    }
    updateList() {
        this.userService.getUsers().subscribe(users => this.users = users, error => this.errorMessage = error);
    }
    getUsers() {
        this.userService.getUsers().subscribe(users => this.users = users, error => this.errorMessage = error);
    }
    ngOnInit() {
        this.getUsers();
    }
};
AddUserComponent = __decorate([
    core_1.Component({
        selector: 'add-user',
        providers: [user_service_1.UserService],
        templateUrl: '../views/adduser.html',
    }), 
    __metadata('design:paramtypes', [user_service_1.UserService])
], AddUserComponent);
exports.AddUserComponent = AddUserComponent;
//# sourceMappingURL=add.user.component.js.map