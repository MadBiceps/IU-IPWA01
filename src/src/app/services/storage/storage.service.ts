import { Injectable } from '@angular/core';
import { ClothingDonation } from 'src/app/models/clothing-donation.model';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  save(key: string, value: ClothingDonation) {
    sessionStorage.setItem(key, JSON.stringify(value));
  }

  get(key: string): ClothingDonation | undefined {
    let jsonString = sessionStorage.getItem(key);
    if(jsonString === null) {
      return undefined;
    }
    return (JSON.parse(jsonString) as unknown as ClothingDonation);
  }
}
