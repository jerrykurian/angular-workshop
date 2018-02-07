import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {User} from '../user';
import { UserServices } from '../../services/user/user.services';
import { ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
@Component({
  selector: 'app-view-user',
  templateUrl: './view.user.component.html'
})
export class ViewUserComponent  {
	constructor(
		private route: ActivatedRoute,
		private userServices: UserServices){		
	}
	user: User = null;
	ngOnInit() {
  	this.route.paramMap
    	.switchMap((params: ParamMap) =>
      		this.loadUser(params.get('id'))
      );
	}
	loadUser(userId: string){
		this.userServices.loadUser(userId);
	}
}
