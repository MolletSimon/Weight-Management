import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/User.model';
import { HttpClient } from '@angular/common/http';
import { ApiService } from './api.service';
import { Weight } from '../models/Weight.model';

@Injectable({
	providedIn: 'root'
})
export class WeightService {

	constructor(private httpClient: HttpClient, private apiService: ApiService) { }

	getUserInfo(): Observable<User> {
		return this.httpClient.get<User>(this.apiService.apiUrl + 'user/SimonMollet', this.apiService.httpOptions);
	}

	modifyUserInfo(user: User): Observable<Object> {
		return this.httpClient.put(
			this.apiService.apiUrl + 'user/modify-infos/SimonMollet',
			user,
			this.apiService.httpOptions
		);
	}

	addWeight(weight: Weight): Observable<Object> {
		return this.httpClient.post(
			this.apiService.apiUrl + 'weight/',
			weight,
			this.apiService.httpOptions
		)
	}

	deleteWeight(id: string): Observable<Object>{
		return this.httpClient.delete(
			this.apiService.apiUrl + `weight/${id}`,
			this.apiService.httpOptions
		)
	}

	getWeightOfUser(user: User): Observable<Weight[]> {
		return this.httpClient.get<Weight[]>(this.apiService.apiUrl + `weight/user/${user._id}`, this.apiService.httpOptions);
	}
}
