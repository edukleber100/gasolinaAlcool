import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  public resultado: String = "Resultado"
  public precoAlcool: number = 0;
  public precoGasolina: number = 0;

  calcular(){

    //validar campos
    if(this.precoAlcool && this.precoGasolina){
      
      var pAlcool = this.precoAlcool
      var pGasolina = this.precoGasolina

      var resultado = pAlcool / pGasolina

      if(resultado >= 0.7){
        this.resultado = "Melhor utilizar Gasolina"
      } else {
        this.resultado = "Melhor utilizar Álcool"
      }

    } else{
      this.resultado = "Preencha corretamente os campos!"
    }
  }
}
