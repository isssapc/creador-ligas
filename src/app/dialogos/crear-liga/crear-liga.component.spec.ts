import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearLigaComponent } from './crear-liga.component';

describe('CrearLigaComponent', () => {
  let component: CrearLigaComponent;
  let fixture: ComponentFixture<CrearLigaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearLigaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearLigaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
