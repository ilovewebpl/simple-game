import { Component, OnInit, HostListener } from '@angular/core';
import { GameAreaItem } from './game-area.model';
import { gameAreaConfiguration } from './game-area.config';

@Component({
  selector: 'app-game-area',
  templateUrl: './game-area.component.html',
  styleUrls: ['./game-area.component.scss']
})
export class GameAreaComponent implements OnInit {

  public numberCols = 10;
  public numberRows = 10;
  public rows: Array<number>;
  public cols: Array<number>;
  public gameConfig: GameAreaItem[] = gameAreaConfiguration;
  public pressedButton = '';
  public gameOver: boolean;
  public gameWin: boolean;

  @HostListener('document:keydown', ['$event'])

  public handleKeyboardEvent(event: KeyboardEvent): void {
    this.pressedButton = event.key;
    this.movePoint(this.pressedButton);
    event.stopPropagation();
  }

  movePoint(eventButton: string): void {
    switch (eventButton) {
      case 'ArrowUp':
        this.movingPointPosition(0, -1);
        break;
      case 'ArrowDown':
        this.movingPointPosition(0, 1);
        break;
      case 'ArrowRight':
        this.movingPointPosition(1, 0);
        break;
      case 'ArrowLeft':
        this.movingPointPosition(-1, 0);
        break;
      default:
        console.log('Sorry, we are out of ' + eventButton + '.');
    }
  }

  getPathClass(colNumber: number, rowNumber: number): boolean {
    let pathItem: GameAreaItem[];
    pathItem = this.gameConfig.filter(item => (item.colNumber === colNumber) && (item.rowNumber === rowNumber));
    if (pathItem[0]) {
      return pathItem[0].isBridge;
    }
  }

  getActiveClass(colNumber: number, rowNumber: number): boolean {
    let pathItem: GameAreaItem[];
    pathItem = this.gameConfig.filter(item => (item.colNumber === colNumber) && (item.rowNumber === rowNumber));
    if (pathItem[0]) {
      return pathItem[0].isActive;
    }
  }

  getPointPosition(): GameAreaItem[] {
    let point: GameAreaItem[];
    point = this.gameConfig.filter(item => item.isActive === true);
    return point;
  }

  setPointPosition(colNumber: number, rowNumber: number): void {
    this.getPointPosition()[0].isActive = false;
    let point: GameAreaItem[];
    point = this.gameConfig.filter(item => (item.colNumber === colNumber) && (item.rowNumber === rowNumber));
    point[0].isActive = true;
  }

  setGameOver(): void {
    this.gameOver = true;
  }

  setWinGame(): void {
    this.gameWin = true;
  }

  newGame(): void {
    this.gameOver = false;
    this.gameWin = false;
    this.setPointPosition(1, 9);
  }

  movingPointPosition(x: number, y: number): void {
    const oldPosX = this.getPointPosition()[0].colNumber;
    const oldPosY = this.getPointPosition()[0].rowNumber;
    const newPosX = oldPosX + x;
    const newPosY = oldPosY + y;

    if (x && this.getPathClass(newPosX, oldPosY)) {
      this.setPointPosition(oldPosX + x, oldPosY);
    } else if (y && this.getPathClass(oldPosX, newPosY)) {
      this.setPointPosition(oldPosX, newPosY);
    } else if (newPosY < 0) {
      this.setWinGame();
      return;
    } else {
      this.setGameOver();
      return;
    }

  }

  ngOnInit() {
    this.rows = new Array(this.numberRows);
    this.cols = new Array(this.numberCols);
  }
}
