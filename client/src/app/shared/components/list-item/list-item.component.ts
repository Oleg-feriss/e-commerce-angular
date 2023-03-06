import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { Direction, Category } from '@shared/models';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListItemComponent {
  @Input() link!: Category;
  @Input() linkContentDirection: Direction = Direction.Row;
  public readonly defaultLinkContentDirection: Direction = Direction.Column;
}
