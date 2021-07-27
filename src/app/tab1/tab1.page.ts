import { IFilme } from './../models/IFilme.models';
import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  titulo = 'Vídeos App';
  listaFilmes: IFilme[] = [
    {
      nome: 'Mortal Kombat (2021)',
      lancamento: '15/04/2021',
      duracao: '1h 50m',
      classificacao: 76,
      generos: ['Ação', 'Aventura', 'Fantasia'],
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ijvC2w2yANsfgLT3LMu2zFr0fxh.jpg'
    },
    {
      nome: 'O Senhor das Armas (2005)',
      lancamento: '14/10/2005',
      duracao: '2h 2m',
      classificacao: 73,
      generos: ['Crime', 'Drama', 'Thriller'],
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/yLxbDZ1h7wbHo7mkyX5AR9hjODe.jpg'
    }
  ];

  constructor(public alertController: AlertController, public toastController: ToastController) {}

  async exibirAlertaFavorito() {
    const alert = await this.alertController.create({
      header: 'Alerta',
      message: 'Deseja realmente adicionar aos favoritos?',
      buttons: [
        {
          text: 'Não',
          role: 'cancel',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Sim',
          handler: () => {
            this.exibirToast();
          }
        }
      ]
    });

    await alert.present();
  }

  async exibirToast() {
    const toast = await this.toastController.create({
      message: 'Adicionado aos favoritos!',
      duration: 2000,
      color: 'success'
    });
    toast.present();
  }

}
