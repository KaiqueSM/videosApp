import { GeneroService } from './../services/genero.service';
import { IFilmeApi, IListaFilmes } from './../models/IFilmeApi.model';
import { FilmeService } from './../services/filme.service';
import { DadosService } from './../services/dados.service';
import { IFilme } from './../models/IFilme.models';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { IGenero } from '../models/IGenero.models';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  titulo = 'Filmes';
  listaFilmes: IFilme[] = [
    {
      nome: 'Mortal Kombat (2021)',
      lancamento: '15/04/2021',
      duracao: '1h 50m',
      classificacao: 76,
      generos: ['Ação', 'Aventura', 'Fantasia'],
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ijvC2w2yANsfgLT3LMu2zFr0fxh.jpg',
      pagina: '/mortal-kombat'
    },
    {
      nome: 'O Senhor das Armas (2005)',
      lancamento: '14/10/2005',
      duracao: '2h 2m',
      classificacao: 73,
      generos: ['Crime', 'Drama', 'Thriller'],
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/yLxbDZ1h7wbHo7mkyX5AR9hjODe.jpg',
      pagina: '/o-senhor-das-armas'
    }
  ];

  listaFilmesApi: IListaFilmes;
  generos: string[] = [];

  constructor(
    public alertController: AlertController,
    public toastController: ToastController,
    public dadosService: DadosService,
    public filmeService: FilmeService,
    public generoService: GeneroService,
    public route: Router
  ) {}

  buscarFilmes(evento: any){
    console.log(evento.target.value);
    const busca = evento.target.value;

    if (busca && busca.trim() !== ''){
      this.filmeService.buscarFilmes(busca).subscribe(dados => {
        console.log(dados);
        this.listaFilmesApi = dados;
      });
    }
  }

  exibirFilme(filme: IFilmeApi){
    this.dadosService.guardarDados('filme', filme);
    this.route.navigateByUrl('/dados-filme');
  }

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

  ngOnInit(){
    this.generoService.buscarGeneros().subscribe(dados =>{
      console.log('Generos: ',dados.genres);
      dados.genres.forEach(genero =>{
        this.generos[genero.id] = genero.name;
      });
    });
  }

}
