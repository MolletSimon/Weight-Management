import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  templateUrl: './about-imc.component.html',
  styleUrls: ['./about-imc.component.scss']
})
export class AboutImcComponent implements OnInit {

  constructor(
    private modalCtrl: ModalController,
    private router: Router
  ) { }

  ngOnInit() {
  }

  closeModal() {
    this.modalCtrl.dismiss();
    this.router.navigate(['tabs/IMC']);
  }

}
