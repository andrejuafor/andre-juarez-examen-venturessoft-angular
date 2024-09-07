import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandCardItemComponent } from './brand-card-item.component';

describe('BrandCardItemComponent', () => {
  let component: BrandCardItemComponent;
  let fixture: ComponentFixture<BrandCardItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrandCardItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BrandCardItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
