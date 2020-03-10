import { Component } from "@angular/core";
import { UserService } from "src/app/services/user.service";
import { NavHelperService } from "src/app/services/nav-helper.service";
import { BooleanHelper } from "src/app/utilities/boolean.util";

@Component({
  selector: "app-add-user",
  templateUrl: "./add-user.component.html",
  styleUrls: ["./add-user.component.css"]
})
export class AddUserComponent {
  public email: string = null;

  public addFailure = false;
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
      this.performReset();
    }
  }

  private performReset() {
    let response;
    this.userService.register(this.email)
      .subscribe((res) => response = res,
        (error) => {
          this.addFailure = true;
        }, () => {
          this.navHelper.goToAdmin();
        });
  }

}
