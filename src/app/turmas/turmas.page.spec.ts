import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TurmasPage } from './turmas.page';

describe('TurmasPage', () => {
  let component: TurmasPage;
  let fixture: ComponentFixture<TurmasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TurmasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TurmasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
