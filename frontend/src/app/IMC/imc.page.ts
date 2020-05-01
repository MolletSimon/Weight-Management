import { Component, OnInit } from '@angular/core';
import { User } from '../models/User.model';
import { WeightService } from '../services/weight.service';
import { IMC } from '../models/IMC.model';

@Component({
	selector: 'app-imc',
	templateUrl: 'imc.page.html',
	styleUrls: ['imc.page.scss']
})
export class IMCPage implements OnInit {

	actualUser: User;
	actualImc: IMC = new IMC();
	imcPourcent: number;

	constructor(
		private weightService: WeightService
	) { }

	doRefresh(event) {
		this.getUserInfo();
		event.target.complete();
	}

	ngOnInit() {
		this.getUserInfo()
	}

	getUserInfo() {
		this.weightService.getUserInfo().subscribe(user => {
			this.actualUser = user;
			this.getImc();
			this.getImcPourcentage();
			console.log(this.imcPourcent);
		});
	}

	getImcPourcentage() {
		this.imcPourcent = Math.round(((this.actualImc.actualImc - 18.5) * 100) / 16.5) / 100;
	}

	getImc() {
		const height = this.actualUser.height * this.actualUser.height;

		this.actualImc.startImc = Math.round((this.actualUser.startWeight / height) * 100) / 100;
		this.actualImc.actualImc = Math.round((this.actualUser.actualWeight / height) * 100) / 100;
		this.actualImc.goalImc = Math.round((this.actualUser.goalWeight / height) * 100) / 100;
	}
}
