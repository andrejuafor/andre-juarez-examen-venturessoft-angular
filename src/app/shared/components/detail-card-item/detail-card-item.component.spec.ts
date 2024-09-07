import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailCardItemComponent } from './detail-card-item.component';

describe('DetailCardItemComponent', () => {
  let component: DetailCardItemComponent;
  let fixture: ComponentFixture<DetailCardItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailCardItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailCardItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
