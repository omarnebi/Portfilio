import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemoiniageComponent } from './temoiniage.component';

describe('TemoiniageComponent', () => {
  let component: TemoiniageComponent;
  let fixture: ComponentFixture<TemoiniageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemoiniageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemoiniageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
