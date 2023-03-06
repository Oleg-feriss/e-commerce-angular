import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { SwiperOptions } from 'swiper';

import { SIZES_SWIPER_SETTINGS } from '../../constants';

@Component({
  selector: 'app-sizes-swiper',
  templateUrl: './sizes-swiper.component.html',
  styleUrls: ['./sizes-swiper.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SizesSwiperComponent {
  @Input() sizes: number[] = [];
  @Output() pickSize: EventEmitter<number> = new EventEmitter<number>();

  public readonly sizesSwiperSettings: SwiperOptions = SIZES_SWIPER_SETTINGS;

  constructor(private elementRef: ElementRef) {}

  onPick(slide: HTMLElement): void {
    const elements = this.elementRef.nativeElement.querySelectorAll(`.size`);
    [...elements].forEach(item => item.classList.remove('picked'));
    slide.classList.add('picked');
    this.pickSize.emit(Number(slide.textContent?.trim()));
  }
}
