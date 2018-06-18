import { TestBed, async, ComponentFixture } from '@angular/core/testing';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let app: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers: []
    });
  }));

  beforeEach(() => {
    fixture = TestBed
      .overrideTemplate(AppComponent, '')
      .createComponent(AppComponent);
    app = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', async(() => {
    expect(app).toBeTruthy();
  }));

});
