import { Component } from '@angular/core';

import { CURRENT_SALES } from './constants';
import { SALES } from './models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  public readonly sales: SALES[] = CURRENT_SALES;
}
