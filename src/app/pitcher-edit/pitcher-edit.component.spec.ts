import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PitcherEditComponent } from './pitcher-edit.component';

describe('PitcherEditComponent', () => {
  let component: PitcherEditComponent;
  let fixture: ComponentFixture<PitcherEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PitcherEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PitcherEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
