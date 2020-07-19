import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAddTaskComponent } from './my-add-task.component';

describe('MyAddTaskComponent', () => {
  let component: MyAddTaskComponent;
  let fixture: ComponentFixture<MyAddTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyAddTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyAddTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
