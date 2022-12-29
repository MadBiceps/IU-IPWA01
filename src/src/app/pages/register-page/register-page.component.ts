import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ClothingDonation } from 'src/app/models/clothing-donation.model';
import { StorageService } from 'src/app/services/storage/storage.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent {

  constructor(
    private storageService: StorageService,
    private router: Router
  ) { }

  onSave(donation: ClothingDonation) {
    this.storageService.save(donation.id, donation);
    this.router.navigate(['confirmation', donation.id]);
  }
}
