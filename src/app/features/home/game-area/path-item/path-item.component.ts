import { Component, OnInit, Input } from '@angular/core';
import { GameAreaItem } from '../game-area.model';

@Component({
  selector: 'app-path-item',
  templateUrl: './path-item.component.html',
  styleUrls: ['./path-item.component.scss']
})

export class PathItemComponent implements GameAreaItem {

  @Input() rowNumber: number;
  @Input() colNumber: number;
  @Input() isBridge: boolean;
  @Input() isActive: boolean;

}
