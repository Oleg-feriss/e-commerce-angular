import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalService {
  public saveData(key: string, value: string): void {
    localStorage.setItem(key, value);
  }

  public getData(key: string): string {
    return localStorage.getItem(key) as string;
  }

  public removeData(key: string): void {
    localStorage.removeItem(key);
  }
}
