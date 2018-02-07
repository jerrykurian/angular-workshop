import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {User} from '../user';
import { UserServices } from '../../services/user/user.services';

@Component({
  selector: 'app-new-user',
  templateUrl: './new.user.component.html'
})
export class NewUserComponent  {
	@Output() userCreated = new EventEmitter<User>();
	user:User = new User("","");
	userServices: UserServices;
	constructor(userServices: UserServices){		
		this.userServices = userServices;
	}
	submit(){
		console.log(this.user);
		this.userServices.create(this.user).subscribe(
				(data)=>{
						this.userCreated.emit(data);						
				},
				(err) =>{
						console.log("Got an error");
				}
			)

	}
	// TODO: Remove this when we're done
	get diagnostic() { return JSON.stringify(this.user); }
}
