import { API_CONFIG } from './../../config/api.config';
import { CategoriaDTO } from './../../models/catgoria.dto';
import { CategoriaService } from './../../services/domain/catgoria.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-categorias',
  templateUrl: 'categorias.html',
})
export class CategoriasPage {


  bucketUrl: string = API_CONFIG.bucketBaseUrl;


items: CategoriaDTO[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public  CategoriaService: CategoriaService) {
  }


  ionViewDidLoad() {
    this.CategoriaService.findAll()
    .subscribe(response => {
      this.items = response;
    },
    error =>{
      console.log(error);
    }
    );

  }


}
