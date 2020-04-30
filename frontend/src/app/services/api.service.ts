import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class ApiService {

	public apiUrl = 'http://localhost:3000/api/'

	public httpOptions = {
		headers: new HttpHeaders({
			'Authorization': 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlNpbW9uTW9sbGV0IiwiaWF0IjoxNTg4MjUxNjI4LCJleHAiOjE1ODg1MTA4Mjh9.QZhVWriLv8tqgP-N81SbSqYYtQ6ZW2gwa8IB8GHEbEM'
		})
	};

	constructor() { }
}
