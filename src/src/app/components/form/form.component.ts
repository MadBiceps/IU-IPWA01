import { Component, EventEmitter, Output } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators
} from '@angular/forms';
import { UUID } from 'angular2-uuid';
import { ClothingDonation } from 'src/app/models/clothing-donation.model';

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

  @Output() submitted = new EventEmitter<ClothingDonation>();

  constructor(formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      id: new FormControl(UUID.UUID(), {
        validators: [Validators.required]
      }),
      localDropOff: new FormControl(false, [Validators.required]),
      address: formBuilder.group({
        name: new FormControl('', [
          Validators.required,
          Validators.minLength(3)
        ]),
        street: new FormControl('', [
          Validators.required,
          Validators.minLength(3)
        ]),
        zipCode: new FormControl('', [
          Validators.required,
          Validators.pattern(/^(?!01000|99999)(0[1-9]\d{3}|[1-9]\d{4})$/)
        ]),
        city: new FormControl('', [
          Validators.required,
          Validators.minLength(3)
        ]),
        email: new FormControl('', [Validators.required, Validators.email])
      }),
      clothingType: new FormArray(
        [
          new FormGroup({
            type: new FormControl('', [Validators.required]),
            count: new FormControl('', [
              Validators.required,
              Validators.pattern(/^[1-9]\d*$/)
            ])
          })
        ],
        [Validators.minLength(1)]
      ),
      crisisArea: new FormControl('', [
        Validators.required
      ])
    });
  }

  public addClothingType(): void {
    (this.form.get('clothingType') as FormArray).push(
      new FormGroup({
        type: new FormControl('', [Validators.required]),
        count: new FormControl('', [Validators.required])
      })
    );
  }

  public getClothingTypes(): FormGroup[] {
    this.form.get('address')?.get('name')?.invalid;

    return (this.form.get('clothingType') as FormArray).controls as FormGroup[];
  }

  public removeClothingType(index: number): void {
    if (this.getClothingTypeCount() <= 1) {
      return;
    }
    (this.form.get('clothingType') as FormArray).removeAt(index);
  }

  public getClothingTypeCount(): number {
    return (this.form.get('clothingType') as FormArray).length;
  }

  public isLocalDropOff(): boolean {
    return this.form.get('localDropOff')?.value;
  }

  public setLocalDropOff(value: boolean): void {
    this.form.get('localDropOff')?.setValue(value);
  }

  public getValidation(
    formField: AbstractControl<any, any> | null | undefined
  ): ValidationErrors | undefined {
    if (formField === undefined || formField === null) {
      return undefined;
    }

    if (formField.untouched || formField.valid) {
      return undefined;
    }

    if (formField.errors === null) {
      return undefined;
    }

    return formField.errors;
  }

  public getFormArrayControls(
    arrayName: string,
    index: number,
    controlName: string
  ) {
    return (this.form.get(arrayName) as FormArray).controls[index].get(
      controlName
    );
  }

  onSubmit() {
    if (this.form.touched) {
      const data: ClothingDonation = {
        id: this.form.get('id')?.value,
        localDropOff: this.form.get('localDropOff')?.value,
        address: this.form.get('localDropOff')?.value
          ? undefined
          : {
              name: this.form.get('address')?.get('name')?.value,
              street: this.form.get('address')?.get('street')?.value,
              zipCode: this.form.get('address')?.get('zipCode')?.value,
              city: this.form.get('address')?.get('city')?.value,
              email: this.form.get('address')?.get('email')?.value
            },
        clothingType: [],
        crisisArea: this.form.get('crisisArea')?.value
      };

      (this.form.get('clothingType') as FormArray).controls.forEach(
        (element) => {
          data.clothingType.push({
            type: element.get('type')?.value,
            count: element.get('count')?.value
          });
        }
      );

      this.submitted.emit(data);
    } else {
      // Display Error that the form is not valid
    }
  }
}
