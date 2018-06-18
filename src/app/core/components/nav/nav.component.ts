import { Component, OnInit } from '@angular/core';
import { version } from '../../../../environments/version';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html'
})
export class NavComponent implements OnInit {

  public version: string;
  public environmentName: string;
  public show: boolean;

  ngOnInit(): void {
    this.environmentName = environment.environmentName;
    this.version = version;
  }

  toggleCollapse() {
    this.show = !this.show;
  }

}
