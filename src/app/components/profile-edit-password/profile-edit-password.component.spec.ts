import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ProfileEditPasswordComponent } from "./profile-edit-password.component";
import { RouterTestingModule } from "@angular/router/testing";
import { FormsModule } from "@angular/forms";
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe("ProfileEditPasswordComponent", () => {
  let component: ProfileEditPasswordComponent;
  let fixture: ComponentFixture<ProfileEditPasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileEditPasswordComponent],
      imports: [RouterTestingModule, FormsModule, HttpClientTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileEditPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
