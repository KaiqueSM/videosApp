import { IListaFilmes } from './../models/IFilmeApi.model';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class FilmeService {

  lingua = 'pt-BR';
  regiao = 'BR';

  private apiUrl = 'https://api.themoviedb.org/3';
  private apiKey = '?api_key=233dcc48943aaa127c472888087fddb3';

  constructor(
      private http: HttpClient,
      public toastController: ToastController
    ) { }

  buscarFilmes(busca: string): Observable<IListaFilmes>{
    const url = `${this.apiUrl}/search/movie${this.apiKey}&language=${this.lingua}&region=${this.regiao}&query=${busca}`;

    return this.http.get<IListaFilmes>(url).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibirErro(erro))
    );
  }

  async exibirErro(erro) {
    const toast = await this.toastController.create({
      message: 'Erro ao Consultar API! ',
      duration: 2000,
      color: 'danger',
      position: 'middle'
    });
    toast.present();
    return null;
  }
}
