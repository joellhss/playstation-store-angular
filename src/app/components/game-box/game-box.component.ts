import { Component, Input, OnInit } from '@angular/core';
import { dataGames } from 'src/app/database/database-fake';

@Component({
  selector: 'app-game-box',
  templateUrl: './game-box.component.html',
  styleUrls: ['./game-box.component.css']
})

export class GameBoxComponent {

  dataGamesArray: {}[] = dataGames;

}
