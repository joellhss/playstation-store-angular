import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent{

  @Input()
  dataGame: {
    id: number,
    coverImg: string,
    title: string,
    label: string,
    console: string[],
    preco: number
  } | any = {
    id: 0,
    coverImg: "",
    title: "",
    label: "string",
    console: [],
    preco: 0
    }



  mostrarOverlay(hover: boolean) {
    const overlay = document.querySelector(".overlay") as HTMLElement;

    if (hover) {
      overlay.style.pointerEvents = "auto";
    } else {
      overlay.style.pointerEvents = "none";
    }
  }


}
