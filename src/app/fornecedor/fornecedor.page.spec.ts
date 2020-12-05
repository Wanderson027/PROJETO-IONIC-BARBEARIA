import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FornecedorPage } from './fornecedor.page';

describe('FornecedorPage', () => {
  let component: FornecedorPage;
  let fixture: ComponentFixture<FornecedorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FornecedorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FornecedorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
