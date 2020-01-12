import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SahiplendirmeComponent } from './sahiplendirme.component';

describe('SahiplendirmeComponent', () => {
  let component: SahiplendirmeComponent;
  let fixture: ComponentFixture<SahiplendirmeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SahiplendirmeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SahiplendirmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
