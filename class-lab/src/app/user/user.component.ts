import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {User} from './user';
import { UserServices } from '../services/user/user.services';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent  {
	@Input() users:Array<User> = [new User('First','Last')];
	@Input() name:string;
	@Output() userSelected = new EventEmitter<User>();

	constructor(private userServices: UserServices){
		this.userServices.findAll().subscribe(
			(data)=>this.users = data,
			(err) => this.users = []
		)
	}
	selectUser(user:User){
		this.userSelected.emit(user);
	}
}
