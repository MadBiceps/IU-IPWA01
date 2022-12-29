import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  save(key: string, value: any) {
    sessionStorage.setItem(key, value);
  }

  get(key: string) {
    sessionStorage.getItem(key);
  }
}
