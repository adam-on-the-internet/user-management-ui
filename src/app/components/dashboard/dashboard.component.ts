import { Component } from "@angular/core";
import { CookieHelper } from 'src/app/utilities/cookie.util';
import { NavHelperService } from 'src/app/services/nav-helper.service';

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent {
  public get isLoggedOn(): boolean {
    return CookieHelper.isLoggedOn;
  }

  public get admin(): boolean {
    return CookieHelper.admin;
  }

  constructor(
    private navHelper: NavHelperService,
  ) { }

  public goToProfile() {
    this.navHelper.goToProfile();
  }

  public goToAdmin() {
    this.navHelper.goToAdmin();
  }

  public goToLogin() {
    this.navHelper.goToLogin();
  }

  public goToRegister() {
    this.navHelper.goToRegister();
  }

  public logout() {
    CookieHelper.removeToken();
    this.navHelper.goToLogin();
  }
}
