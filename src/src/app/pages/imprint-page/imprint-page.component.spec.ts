import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpressumPageComponent } from './imprint-page.component';

describe('ImpressumPageComponent', () => {
  let component: ImpressumPageComponent;
  let fixture: ComponentFixture<ImpressumPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ImpressumPageComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ImpressumPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
