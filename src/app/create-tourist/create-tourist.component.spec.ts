import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTouristComponent } from './create-tourist.component';

describe('CreateTouristComponent', () => {
  let component: CreateTouristComponent;
  let fixture: ComponentFixture<CreateTouristComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateTouristComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateTouristComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
