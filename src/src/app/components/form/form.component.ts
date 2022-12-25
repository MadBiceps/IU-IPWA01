import { Component, EventEmitter, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UUID } from 'angular2-uuid';
import { ClothingDonation } from 'src/app/models/clothing-donaition';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  /**
   * Fields normal:
   * - name
   * - email
   * - street
   * - house number
   * - zip code
   * - city
   * - clothing type
   * - clothing count
   * - crisis area
   * 
   * Fields local drop off:
   * - clothing type
   * - clothing count
   * - crisis area
  */

  public form: FormGroup;

  @Output() onSubmitted = new EventEmitter<ClothingDonation>();

  constructor(formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      id: new FormControl(UUID.UUID(), {
        validators: [
          Validators.required
        ]
      }),
      localDropOff: new FormControl(false, [
        Validators.required
      ]),
      address: formBuilder.group({
        name: new FormControl('', [
          Validators.required
        ]),
        street: new FormControl('', [
          Validators.required,
          Validators.minLength(3)
        ]),
        houseNumber: new FormControl('', [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(5),
          Validators.pattern(/^[1-9]\d*$/)
        ]),
        zipCode: new FormControl('', [
          Validators.required,
          Validators.pattern(/^(?!01000|99999)(0[1-9]\d{3}|[1-9]\d{4})$/)
        ]),
        city: new FormControl('', [
          Validators.required,
          Validators.minLength(3)
        ]),
        email: new FormControl('', [
          Validators.required,
          Validators.email
        ])
      }),
      clothingType: new FormArray([
        new FormGroup({
          id: new FormControl(UUID.UUID(), [
            Validators.required
          ]),
          type: new FormControl('', [
            Validators.required
          ]),
          count: new FormControl('', [
            Validators.required,
            Validators.pattern(/^[1-9]\d*$/)
          ])
        })
      ], [
        Validators.minLength(1)
      ])
    });
  }

  public addClothingType(): void {
    (this.form.get('clothingType') as FormArray).push(new FormGroup({
      type: new FormControl('', [
        Validators.required
      ]),
      count: new FormControl('', [
        Validators.required
      ])
    }));
  }

  public removeClothingType(id: string): void {
    const index = (this.form.get('clothingType') as FormArray).controls.findIndex((control) => {
      return control.get('id')?.value === id;
    });

    if(index === -1) {
      return;
    }
    
    (this.form.get('clothingType') as FormArray).removeAt(index);
  }
}
