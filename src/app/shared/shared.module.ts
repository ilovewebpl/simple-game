import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const modules = [
  CommonModule,
];

const components = [];

const exported = [
  ...components,
  CommonModule,
];

@NgModule({
  imports: modules,
  declarations: components,
  exports: exported
})

export class SharedModule {
}
