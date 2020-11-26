import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FormClientePage } from './form-cliente.page';

describe('FormClienteComponent', () => {
  let component: FormClientePage;
  let fixture: ComponentFixture<FormClientePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormClientePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FormClientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
