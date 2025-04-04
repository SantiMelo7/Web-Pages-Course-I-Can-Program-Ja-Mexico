import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentrosAcopioComponent } from './centros-acopio.component';

describe('CentrosAcopioComponent', () => {
  let component: CentrosAcopioComponent;
  let fixture: ComponentFixture<CentrosAcopioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CentrosAcopioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CentrosAcopioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
