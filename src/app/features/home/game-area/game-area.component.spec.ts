import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { GameAreaComponent } from './game-area.component';

describe('GameAreaComponent', () => {
  let component: GameAreaComponent;
  let fixture: ComponentFixture<GameAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        GameAreaComponent
      ],
      providers: []
    });
  }));

  beforeEach(() => {
    fixture = TestBed
      .overrideTemplate(GameAreaComponent, '')
      .createComponent(GameAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
