import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HitterEditComponent } from './hitter-edit.component';

describe('HitterEditComponent', () => {
  let component: HitterEditComponent;
  let fixture: ComponentFixture<HitterEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HitterEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HitterEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
