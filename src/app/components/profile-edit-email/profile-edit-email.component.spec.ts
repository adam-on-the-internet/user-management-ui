import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ProfileEditEmailComponent } from "./profile-edit-email.component";
import { RouterTestingModule } from "@angular/router/testing";
import { FormsModule } from "@angular/forms";
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe("ProfileEditEmailComponent", () => {
  let component: ProfileEditEmailComponent;
  let fixture: ComponentFixture<ProfileEditEmailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileEditEmailComponent],
      imports: [RouterTestingModule, FormsModule, HttpClientTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileEditEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
