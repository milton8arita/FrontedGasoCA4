import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListIncidentesComponent } from './list-incidentes.component';

describe('ListIncidentesComponent', () => {
  let component: ListIncidentesComponent;
  let fixture: ComponentFixture<ListIncidentesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListIncidentesComponent]
    });
    fixture = TestBed.createComponent(ListIncidentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
