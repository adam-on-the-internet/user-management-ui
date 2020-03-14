import { Component } from "@angular/core";
import { BooleanHelper } from "src/app/utilities/boolean.util";
import { UserService } from "src/app/services/user.service";
import { NavHelperService } from "src/app/services/nav-helper.service";

@Component({
  selector: "app-profile-edit-password",
  templateUrl: "./profile-edit-password.component.html",
  styleUrls: ["./profile-edit-password.component.css"]
})
export class ProfileEditPasswordComponent {
  public password: string = null;
  public confirmPassword: string = null;

  public resetFailure = false;
  public showErrors = false;

  public get errors(): string[] {
    const myErrors = [];
    if (this.passwordInvalid) {
      myErrors.push("Please enter a new password.");
    }
    if (this.confirmPasswordInvalid) {
      myErrors.push("Please confirm your new password.");
    }
    if (this.passwordsDoNotMatch) {
      myErrors.push("Passwords must match.");
    }
    return myErrors;
  }

  public get valid(): boolean {
    return this.errors.length === 0;
  }

  private get passwordInvalid(): boolean {
    return !BooleanHelper.hasValue(this.password);
  }

  private get confirmPasswordInvalid(): boolean {
    return !BooleanHelper.hasValue(this.confirmPassword);
  }

  private get passwordsDoNotMatch(): boolean {
    return this.password !== this.confirmPassword;
  }

  constructor(
    private userService: UserService,
    private navHelper: NavHelperService,
  ) { }


  public submit() {
    this.showErrors = true;
    if (this.valid) {
      this.performPasswordUpdate();
    }
  }

  private performPasswordUpdate() {
    let response;
    this.userService.resetPasswordManual(this.password, this.confirmPassword)
      .subscribe((res) => response = res,
        (error) => {
          console.log("edit failed");
        }, () => {
          this.navHelper.goToProfile();
        });
  }

}
