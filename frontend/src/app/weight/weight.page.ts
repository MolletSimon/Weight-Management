import { Component, OnInit } from '@angular/core';
import { WeightService } from '../services/weight.service';
import { User } from '../models/User.model';
import { ToastController, AlertController } from '@ionic/angular';
import { Weight } from '../models/Weight.model';
import { DatePipe } from '@angular/common';

@Component({
	selector: 'app-weight',
	templateUrl: 'weight.page.html',
	styleUrls: ['weight.page.scss']
})
export class WeightPage implements OnInit {
	weights: Weight[];
	actualUser: User;
	weightModified = false;

	constructor(
		private weightService: WeightService,
		private toastController: ToastController,
		private datePipe: DatePipe,
		private alertController: AlertController
		) { }

	ngOnInit() {
		this.getUserInfos();
	}

	getUserInfos() {
		this.weightService.getUserInfo().subscribe(user => {
			this.actualUser = user;
			this.getWeights();
			this.weightModified = false;
		})
	}

	getWeights() {
		this.weightService.getWeightOfUser(this.actualUser).subscribe(weights => {
			this.weights = weights;
			this.weights.reverse();
			this.weights = this.weights.slice(0, 6);
		})
	}

	doRefresh(event) {
		this.getUserInfos();
		event.target.complete();
	}

	getLastWeight() {
		return this.weights[0].value;
	}

	addWeight() {
		this.actualUser.actualWeight = +(this.actualUser.actualWeight + 0.1).toFixed(1);
		this.weightModified = true;
	}

	removeWeight() {
		this.actualUser.actualWeight = +(this.actualUser.actualWeight - 0.1).toFixed(1);
		this.weightModified = true;
	}

	save() {
		this.weightModified = false;
		this.weightService.modifyUserInfo(this.actualUser)
			.subscribe(async (res) => {
				this.addWeightDatabase();
				const toast = await this.toastController.create({
					message: res["message"],
					duration: 3000,
					color: 'primary'
				  });
				  toast.present();
			});
	}

	addWeightDatabase() {
		const weight = new Weight();
		weight.value = this.actualUser.actualWeight;
		weight.userId = this.actualUser._id;
		weight.date = new Date();
		if (this.actualUser.actualWeight < this.getLastWeight()) {
			weight.loss = "loss";
		} else if (this.actualUser.actualWeight > this.getLastWeight()) {
			weight.loss = "gain";
		} else {
			weight.loss = "draw";
		}
		this.weightService.addWeight(weight)
			.subscribe(res => this.getWeights());
	}

	async presentAlertModifyWeight() {
		const alert = await this.alertController.create({
			header: 'Saisir poids :',
			inputs: [
				{
					name: 'weight',
					type: 'number',
					placeholder: 'Entrez votre poids'
				}
			],
			buttons: [
				{
					text: 'Annuler',
					role: 'cancel',
					cssClass: 'danger',
				},
				{
					text: 'Valider',
					handler: data => {
						this.actualUser.actualWeight = parseFloat(data.weight);
						this.save();
					}
				}
			]
		});

		await alert.present();
	}
}
