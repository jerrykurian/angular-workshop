import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UserServices } from '../services/user/user.services';
import { UserComponent } from './user.component';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserComponent ],
      providers: [
        UserServices
      ],
      imports: [
        RouterModule,
        HttpModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
