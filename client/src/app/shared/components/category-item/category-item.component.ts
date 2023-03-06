import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { Category } from '@shared/models';

@Component({
  selector: 'app-category-item',
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryItemComponent {
  @Input() category: Category = { label: '', name: '', icon: '' };
  @Input() categoryLink: string = '';
}
