import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { SwiperOptions } from 'swiper';

import { COLORS_SWIPER_SETTINGS } from '../../constants';

@Component({
  selector: 'app-colors-swiper',
  templateUrl: './colors-swiper.component.html',
  styleUrls: ['./colors-swiper.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ColorsSwiperComponent {
  @Input() colors: string[] = [];
  @Output() pickColor: EventEmitter<string> = new EventEmitter<string>();

  public readonly colorsSwiperSettings: SwiperOptions = COLORS_SWIPER_SETTINGS;

  constructor(private elementRef: ElementRef) {}

  onPick(slide: HTMLElement): void {
    const elements = this.elementRef.nativeElement.querySelectorAll(`.color`);
    [...elements].forEach(item => item.classList.remove('picked'));
    slide.classList.add('picked');
    this.pickColor.emit(slide.style.backgroundColor as string);
  }
}
