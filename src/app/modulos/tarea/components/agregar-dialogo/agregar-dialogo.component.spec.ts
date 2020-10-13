import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarDialogoComponent } from './agregar-dialogo.component';

describe('AgregarDialogoComponent', () => {
  let component: AgregarDialogoComponent;
  let fixture: ComponentFixture<AgregarDialogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarDialogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarDialogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
