import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatarBelakang } from './latar-belakang';

describe('LatarBelakang', () => {
  let component: LatarBelakang;
  let fixture: ComponentFixture<LatarBelakang>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LatarBelakang],
    }).compileComponents();

    fixture = TestBed.createComponent(LatarBelakang);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
