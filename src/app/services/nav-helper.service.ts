import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { ROUTES_ENUM } from "../constants/routing.constants";

@Injectable({
  providedIn: "root"
})
export class NavHelperService {

  constructor(
    private router: Router,
  ) { }

  public goToDashboard(): void {
    this.goToRoute(ROUTES_ENUM.Dashboard);
  }

  public goToInfo(): void {
    this.goToRoute(ROUTES_ENUM.Info);
  }

  public goToProfile(): void {
    this.goToRoute(ROUTES_ENUM.Profile);
  }

  public goToProfileEditEmail(): void {
    this.goToRoute(ROUTES_ENUM.ProfileEditEmail);
  }

  public goToProfileEditPassword(): void {
    this.goToRoute(ROUTES_ENUM.ProfileEditPassword);
  }

  public goToAdmin(): void {
    this.goToRoute(ROUTES_ENUM.Admin);
  }

  public goToLogin(): void {
    this.goToRoute(ROUTES_ENUM.Login);
  }

  public goToRegister(): void {
    this.goToRoute(ROUTES_ENUM.Register);
  }

  public goToForgot(): void {
    this.goToRoute(ROUTES_ENUM.Forgot);
  }

  public goToAddUser(): void {
    this.goToRoute(ROUTES_ENUM.AddUser);
  }

  public goToEditUser(id: string): void {
    this.goToRoutes([ROUTES_ENUM.EditUser, id]);
  }

  private goToRoute(route: string): void {
    this.goToRoutes([route]);
  }

  private goToRoutes(routes: string[]): void {
    this.router.navigate(routes);
  }
}
