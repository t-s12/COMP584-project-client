import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PositionPlayersComponent } from './position-players.component';

describe('PositionPlayersComponent', () => {
  let component: PositionPlayersComponent;
  let fixture: ComponentFixture<PositionPlayersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PositionPlayersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PositionPlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
