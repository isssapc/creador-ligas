import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearJugadorComponent } from './crear-jugador.component';

describe('CrearJugadorComponent', () => {
  let component: CrearJugadorComponent;
  let fixture: ComponentFixture<CrearJugadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearJugadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearJugadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
