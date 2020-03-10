import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { EditUserComponent } from "./edit-user.component";
import { RouterTestingModule } from "@angular/router/testing";

describe("EditUserComponent", () => {
  let component: EditUserComponent;
  let fixture: ComponentFixture<EditUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EditUserComponent],
      imports: [RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
