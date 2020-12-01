import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FormProfessoresPage } from './form-professores.page';

describe('FormProfessoresPage', () => {
  let component: FormProfessoresPage;
  let fixture: ComponentFixture<FormProfessoresPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormProfessoresPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FormProfessoresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
