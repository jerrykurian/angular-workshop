import { Injectable } from '@angular/core';
import { User } from '../../user/user';
import { Http, Headers, Response } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
@Injectable()
export class UserServices {
	constructor(private http:Http){
	}
	create(user: User): Observable<User>{
		console.log("Storing User " + user);
		return this.http.post("users", user).map(this.retResponse);
	}
	findAll():Observable<Array<User>>{
		return this.http.get("users").map(this.retResponse);
	}
	loadUser(userId:string):Observable<User>{
		return this.http.get("http://localhost:8080/users/"+userId).map(this.retResponse);
	}
	retResponse(res: Response) {
    const body = res.json();
    return body || { };
  }
}