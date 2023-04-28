import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TouristListComponent } from './tourist-list.component';

describe('TouristListComponent', () => {
  let component: TouristListComponent;
  let fixture: ComponentFixture<TouristListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TouristListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TouristListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
