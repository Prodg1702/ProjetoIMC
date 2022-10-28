import { Attribute, Component } from '@angular/core';
import { AlertController } from '@ionic/angular';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  altura: string
  peso: string
  sexo: string
  shape: string
  saida: string


  
  constructor() {}

  imc() {
    var gen = this.sexo

    var A1 = parseFloat(this.altura)
    var P1 = parseFloat(this.peso)

    var resultado = P1 / (A1 **2)

    this.saida = resultado.toString()

    if (gen == "fem"){
      if (resultado <= 19){
        this.shape = 'Magro pa Garai'
      }
      if (resultado > 19 && resultado <=27.3){
        this.shape = 'Normal'
      }
      if (resultado > 27.3){
        this.shape = 'Planeta'
      }
    }

    if (gen == "masc"){
      if (resultado <=20.7){
        this.shape = 'Filé de borboleta'
      }
      if (resultado > 20.7 && resultado <= 27.8){
        this.shape = 'Normal'
      }
      if (resultado > 27.8){
        this.shape = 'SOL andando na terra'
      }
    }

  }

}


