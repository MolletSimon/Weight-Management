import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/User.model';
import { HttpClient } from '@angular/common/http';
import { ApiService } from './api.service';

@Injectable({
	providedIn: 'root'
})
export class WeightService {

	constructor(private httpClient: HttpClient, private apiService: ApiService) { }

	getUserInfo(): Observable<User> {
		return this.httpClient.get<User>(this.apiService.apiUrl + 'user/SimonMollet', this.apiService.httpOptions);
	}
}
