import { Component } from "@angular/core";
import { NavHelperService } from "src/app/services/nav-helper.service";
import { CookieHelper } from "src/app/utilities/cookie.util";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent {

  public get isLoggedIn(): boolean {
    return CookieHelper.isLoggedOn;
  }

  public get isAdmin(): boolean {
    return CookieHelper.getUserDetails().admin;
  }

  constructor(
    private navHelper: NavHelperService,
  ) { }

  public goToDashboard(): void {
    this.navHelper.goToDashboard();
  }

  public goToProfile(): void {
    this.navHelper.goToProfile();
  }

  public goToAdmin(): void {
    this.navHelper.goToAdmin();
  }

  public goToLogin(): void {
    this.navHelper.goToLogin();
  }

  public goToRegister(): void {
    this.navHelper.goToRegister();
  }

  public logout(): void {
    CookieHelper.removeToken();
    this.navHelper.goToLogin();
  }
}
