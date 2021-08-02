import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { IListaGenero } from '../models/IGenero.models';

@Injectable({
  providedIn: 'root'
})
export class GeneroService {

  lingua = 'pt-BR';

  private apiUrl = 'https://api.themoviedb.org/3';
  private apiKey = '?api_key=233dcc48943aaa127c472888087fddb3';

  constructor(
    private http: HttpClient,
    public toastController: ToastController
  ) { }

  buscarGeneros(): Observable<IListaGenero>{
    const url = `${this.apiUrl}/genre/movie/list${this.apiKey}&language=${this.lingua}`;

    return this.http.get<IListaGenero>(url).pipe(
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
