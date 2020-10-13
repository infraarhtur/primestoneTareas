import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarDialogoComponent } from './editar-dialogo.component';

describe('EditarDialogoComponent', () => {
  let component: EditarDialogoComponent;
  let fixture: ComponentFixture<EditarDialogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarDialogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarDialogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
