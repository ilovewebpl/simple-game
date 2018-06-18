import { NgModule} from '@angular/core';
import { RulesRoutingModule } from './rules-routing.module';
import { RulesComponent } from './rules.component';

const modules = [
  RulesRoutingModule
];

@NgModule({
  imports: modules,
  declarations: [
    RulesComponent
  ]
})

export class RulesModule {
}
