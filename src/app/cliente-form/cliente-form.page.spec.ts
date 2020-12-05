import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ClienteFormPage } from './cliente-form.page';

describe('ClienteFormPage', () => {
  let component: ClienteFormPage;
  let fixture: ComponentFixture<ClienteFormPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClienteFormPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ClienteFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
