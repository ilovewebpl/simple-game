import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RulesComponent } from './rules.component';

describe('ContactComponent', () => {
  let component: RulesComponent;
  let fixture: ComponentFixture<RulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed
      .overrideTemplate(RulesComponent, '')
      .createComponent(RulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
