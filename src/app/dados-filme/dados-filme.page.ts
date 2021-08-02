import { GeneroService } from './../services/genero.service';
import { DadosService } from './../services/dados.service';
import { Component, OnInit } from '@angular/core';
import { IFilmeApi } from '../models/IFilmeApi.model';

@Component({
  selector: 'app-dados-filme',
  templateUrl: './dados-filme.page.html',
  styleUrls: ['./dados-filme.page.scss'],
})
export class DadosFilmePage implements OnInit {

  filme: IFilmeApi;
  generos: string[] = [];

  constructor(
    public dadosService: DadosService,
    public generoService: GeneroService
  ) { }

  ngOnInit() {
    this.filme = this.dadosService.pegarDados('filme');
    console.log('Filme enviado: ',this.filme);

    this.generoService.buscarGeneros().subscribe(dados =>{
      console.log('Generos: ',dados.genres);
      dados.genres.forEach(genero =>{
        this.generos[genero.id] = genero.name;
      });
    });
  }

}
