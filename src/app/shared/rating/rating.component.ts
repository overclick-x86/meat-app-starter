import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mt-rating',
  templateUrl: './rating.component.html'
})
export class RatingComponent implements OnInit {

  @Output() rated = new EventEmitter<number>()

  rates: number[] = [1,2,3,4,5]

  rate: number = 0

  previousRate: number

  constructor() { }

  ngOnInit() {
  }

  /**
   * Mouse Click
   */
  setRate(r: number){

    // Define o rate selecionado
    this.rate = r

    // Limpa vaiavel de armazenamento de backup do rate
    this.previousRate = undefined

    // Propaga evento "rated" com o valor do rate
    this.rated.emit(this.rate)
  }

  /**
   * Mouse Enter
   */
  setTemporaryRate(r: number){

    // Se local de backup esta indefinido
    if (this.previousRate === undefined) {

      // Faz backup do rate selecionado
      this.previousRate = this.rate
    }

    // Define o novo rate conforme a posição do mouse em cima da estrela
    this.rate = r
  }

  /**
   * Mouse Leave
   */
  clearTemporaryRate(){

    // Se existe valor no backup do rate
    if (this.previousRate !== undefined) {

      // Restaura o rate selecionado
      this.rate = this.previousRate

      // Limpa a variável de armazenamento do backup
      this.previousRate = undefined
    }
  }

}
