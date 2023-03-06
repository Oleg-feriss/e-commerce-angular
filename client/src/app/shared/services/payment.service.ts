import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { CARD_DEFAULT_VALUES } from 'app/payment/constants';
import { Card } from 'app/payment/models';

@Injectable({
  providedIn: 'root',
})
export class PaymentService {
  public cards: Card[] = [];
  public formValues!: Card;
  private isFormValid$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );

  public getIsFormValid(): Observable<boolean> {
    return this.isFormValid$.asObservable();
  }

  public setIsFormValid(newValue: boolean): void {
    this.isFormValid$.next(newValue);
  }

  public addCard(newCard: Card): void {
    this.cards = !localStorage.getItem('cards')
      ? []
      : JSON.parse(<string>localStorage.getItem('cards'));

    this.cards.push(newCard);
    this.saveCards(this.cards);
  }

  public editCard(cardIndex: number, cardValues: Card): void {
    this.cards.splice(cardIndex, 1, cardValues);
    this.saveCards(this.cards);
  }

  public deleteCard(cardIndex: number): void {
    this.cards.splice(cardIndex, 1);
    this.saveCards(this.cards);
  }

  public getCard(number: number): Card {
    this.cards = JSON.parse(<string>localStorage.getItem('cards'));

    const card = this.cards.find(c => {
      return Number(c.cardNumber) === number;
    });

    return card ?? CARD_DEFAULT_VALUES;
  }

  private saveCards(cards: Card[]): void {
    localStorage.setItem('cards', JSON.stringify(cards));
  }
}
