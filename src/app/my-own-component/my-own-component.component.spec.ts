import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyOwnComponentComponent } from './my-own-component.component';

describe('MyOwnComponentComponent', () => {
  let component: MyOwnComponentComponent;
  let fixture: ComponentFixture<MyOwnComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyOwnComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyOwnComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
