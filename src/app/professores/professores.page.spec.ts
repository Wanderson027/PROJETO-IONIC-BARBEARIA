import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProfessoresPage } from './professores.page';

describe('ProfessoresPage', () => {
  let component: ProfessoresPage;
  let fixture: ComponentFixture<ProfessoresPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfessoresPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProfessoresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
