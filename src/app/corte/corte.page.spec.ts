import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CortePage } from './corte.page';

describe('CortePage', () => {
  let component: CortePage;
  let fixture: ComponentFixture<CortePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CortePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CortePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
