import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentrosacopiosComponent } from './centrosacopios.component';

describe('CentrosacopiosComponent', () => {
  let component: CentrosacopiosComponent;
  let fixture: ComponentFixture<CentrosacopiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CentrosacopiosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CentrosacopiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
