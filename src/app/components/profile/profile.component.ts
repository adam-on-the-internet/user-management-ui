import { Component } from "@angular/core";
import { CookieHelper } from "src/app/utilities/cookie.util";
import { NavHelperService } from "src/app/services/nav-helper.service";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"]
})
export class ProfileComponent {

  public get userDetails(): any {
    return CookieHelper.getUserDetails();
  }

  public get email(): any {
    return CookieHelper.email;
  }

  public get admin(): any {
    return CookieHelper.admin;
  }

  public get specialAccess(): any {
    return CookieHelper.specialAccess;
  }

  constructor(
    private navHelperService: NavHelperService,
  ) { }

  public editEmail() {
    this.navHelperService.goToProfileEditEmail();
  }

  public editPassword() {
    this.navHelperService.goToProfileEditPassword();
  }

}
