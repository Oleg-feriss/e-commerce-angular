import { Subject, Observable } from 'rxjs';

  /**
   * Decorator to automate the unsubscribe process

   * @_takeUntilDestroy -Subject to govern our unsubscription process
   * 
   * @componentDestroy - Method that should be implemented in the component 
   * and then placed inside the RxJS takeUntil operator whenever 
   * you want to unsubscribe 
   * 
   * @ngOnDestroy - Override the ngOnDestroy in which we initially
   * transfer control to the original method
   * 
   * @next - subject method that will loop through its list of observers
   * and forward that value along to their next methods

   */

export function TakeUntilDestroy(constructor: Function): void {
  const originalDestroy = constructor.prototype.ngOnDestroy;

  if (typeof originalDestroy !== 'function') {
    console.warn(
      `${constructor.name} is using @TakeUntilDestroy but does not implement OnDestroy`
    );
  }

  constructor.prototype.componentDestroy = function (): Observable<void> {
    this._takeUntilDestroy$ = this._takeUntilDestroy$ || new Subject();

    return this._takeUntilDestroy$.asObservable();
  };

  constructor.prototype.ngOnDestroy = function (...args: any): void {
    if (typeof originalDestroy === 'function') {
      originalDestroy.apply(this, args);
    }

    if (this._takeUntilDestroy$) {
      this._takeUntilDestroy$.next();
      this._takeUntilDestroy$.complete();
    }
  };
}
