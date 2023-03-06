import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { Direction } from '../../models';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent {
  @Input() direction: Direction = Direction.Row;
  public readonly defaultContentDirection: Direction = Direction.Column;
}
