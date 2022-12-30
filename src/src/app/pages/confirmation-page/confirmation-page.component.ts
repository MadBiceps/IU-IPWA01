import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClothingDonation } from 'src/app/models/clothing-donation.model';
import { StorageService } from 'src/app/services/storage/storage.service';

@Component({
  selector: 'app-confirmation-page',
  templateUrl: './confirmation-page.component.html',
  styleUrls: ['./confirmation-page.component.scss']
})
export class ConfirmationPageComponent {
  public clothingDonation: ClothingDonation | undefined;

  constructor(
    private storageService: StorageService,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.params.subscribe((params) => {
      const { id } = params;

      this.clothingDonation = this.storageService.get(id);
    });
  }
}
