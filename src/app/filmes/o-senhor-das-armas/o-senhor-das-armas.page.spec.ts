import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OSenhorDasArmasPage } from './o-senhor-das-armas.page';

describe('OSenhorDasArmasPage', () => {
  let component: OSenhorDasArmasPage;
  let fixture: ComponentFixture<OSenhorDasArmasPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OSenhorDasArmasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OSenhorDasArmasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
