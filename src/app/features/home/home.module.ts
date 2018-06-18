import { NgModule} from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SharedModule } from '../../shared/shared.module';
import { GameAreaComponent } from './game-area/game-area.component';
import { PathItemComponent } from './game-area/path-item/path-item.component';

const modules = [
  HomeRoutingModule,
  SharedModule
];

@NgModule({
  imports: modules,
  declarations: [
    HomeComponent,
    GameAreaComponent,
    PathItemComponent
  ]
})

export class HomeModule {
}
