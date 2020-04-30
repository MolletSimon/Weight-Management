import { Component, OnInit } from '@angular/core';
import { WeightService } from '../services/weight.service';
import { User } from '../models/User.model';

@Component({
	selector: 'app-weight',
	templateUrl: 'weight.page.html',
	styleUrls: ['weight.page.scss']
})
export class WeightPage implements OnInit {

	actualUser: User;

	constructor(private weightService: WeightService) { }

	ngOnInit() {
		this.getUserInfos();
	}

	getUserInfos() {
		this.weightService.getUserInfo().subscribe(user => {
			this.actualUser = user;
			console.log(this.actualUser);
		})
	}
}
