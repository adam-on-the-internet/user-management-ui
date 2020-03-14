import { Component } from "@angular/core";
import { BooleanHelper } from "src/app/utilities/boolean.util";
import { UserService } from "src/app/services/user.service";
import { NavHelperService } from "src/app/services/nav-helper.service";

@Component({
  selector: "app-profile-edit-email",
  templateUrl: "./profile-edit-email.component.html",
  styleUrls: ["./profile-edit-email.component.css"]
})
export class ProfileEditEmailComponent {
  public email: string = null;

  public resetFailure = false;
  public showErrors = false;

  public get errors(): string[] {
    const myErrors = [];
    if (this.emailInvalid) {
      myErrors.push("Please provide an email.");
    }
    return myErrors;
  }

  public get valid(): boolean {
    return this.errors.length === 0;
  }

  private get emailInvalid(): boolean {
    return !BooleanHelper.hasValue(this.email);
  }

  constructor(
    private userService: UserService,
    private navHelper: NavHelperService,
  ) { }


  public submit() {
    this.showErrors = true;
    if (this.valid) {
      this.updateEmail();
    }
  }

  private updateEmail() {
    let response;
    this.userService.updateEmailSelf(this.email)
      .subscribe((res) => response = res,
        (error) => {
          console.log("edit failed");
        }, () => {
          this.navHelper.goToProfile();
        });
  }


}
