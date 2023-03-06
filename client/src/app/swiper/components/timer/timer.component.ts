import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Observable, takeUntil, timer } from 'rxjs';

import { TakeUntilDestroy } from '@core/decorators/take-until-destroy';
import { Timer } from 'app/swiper/models';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
@TakeUntilDestroy
export class TimerComponent implements OnInit, OnDestroy {
  @Input() saleEnd!: number;

  private componentDestroy!: () => Observable<void>;

  public hasSaleEnded: boolean = false;
  public timer: Timer = {
    hours: '00',
    minutes: '00',
    seconds: '00',
  };

  constructor(private changeDetectorRef: ChangeDetectorRef) {}

  ngOnInit(): void {
    timer(0, 1000)
      .pipe(takeUntil(this.componentDestroy()))
      .subscribe(() => {
        this.calculateTimer();
        this.changeDetectorRef.markForCheck();
      });
  }

  ngOnDestroy(): void {}

  public calculateTimer(): void {
    if (this.saleEnd < new Date().getTime()) {
      this.hasSaleEnded = true;
    } else {
      const timeUntilEnd = (this.saleEnd - new Date().getTime()) / 1000;

      const hours = Math.floor(timeUntilEnd / 3600);
      const minutes = Math.floor((timeUntilEnd % 3600) / 60);
      const seconds = Math.floor(timeUntilEnd - minutes * 60);

      this.timer.hours = ('00' + hours).slice(-2);
      this.timer.minutes = ('00' + minutes).slice(-2);
      this.timer.seconds = ('00' + seconds).slice(-2);
    }
  }
}
