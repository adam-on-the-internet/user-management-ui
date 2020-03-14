import { Component, OnInit } from "@angular/core";
import { NavHelperService } from "src/app/services/nav-helper.service";
import { User } from "src/app/models/User.model";
import { BooleanHelper } from "src/app/utilities/boolean.util";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"]
})
export class ProfileComponent implements OnInit {
  public user: User = null;

  public get ready(): boolean {
    return BooleanHelper.hasValue(this.user);
  }

  constructor(
    private navHelperService: NavHelperService,
    private userService: UserService,
  ) { }

  public ngOnInit() {
    this.loadUser();
  }

  public editEmail() {
    this.navHelperService.goToProfileEditEmail();
  }

  public editPassword() {
    this.navHelperService.goToProfileEditPassword();
  }

  private loadUser(): void {
    this.user = null;
    this.userService.getUserSelf()
      .subscribe((res) => this.user = res,
        (error) => {
          console.log("get user failed");
        });
  }

}
