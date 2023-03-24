import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCompetenciasComponent } from './list-competencias.component';

describe('ListCompetenciasComponent', () => {
  let component: ListCompetenciasComponent;
  let fixture: ComponentFixture<ListCompetenciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCompetenciasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListCompetenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
