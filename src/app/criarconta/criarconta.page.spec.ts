import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CriarcontaPage } from './criarconta.page';

describe('CriarcontaPage', () => {
  let component: CriarcontaPage;
  let fixture: ComponentFixture<CriarcontaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriarcontaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CriarcontaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
