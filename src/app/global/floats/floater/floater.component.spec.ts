import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FloaterComponent } from './floater.component';

describe('FloaterComponent', () => {
  let component: FloaterComponent;
  let fixture: ComponentFixture<FloaterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FloaterComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FloaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
