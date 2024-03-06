import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListGasolinerasComponent } from './list-gasolineras.component';

describe('ListGasolinerasComponent', () => {
  let component: ListGasolinerasComponent;
  let fixture: ComponentFixture<ListGasolinerasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListGasolinerasComponent]
    });
    fixture = TestBed.createComponent(ListGasolinerasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
