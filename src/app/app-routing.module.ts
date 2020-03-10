import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { InfoComponent } from "./components/info/info.component";
import { ROUTES_ENUM } from "./constants/routing.constants";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { ProfileComponent } from "./components/profile/profile.component";
import { AdminComponent } from "./components/admin/admin.component";
import { ForgotComponent } from "./components/forgot/forgot.component";
import { AddUserComponent } from "./components/add-user/add-user.component";
import { EditUserComponent } from "./components/edit-user/edit-user.component";

const routes: Routes = [
  // main
  { path: ROUTES_ENUM.Dashboard, component: DashboardComponent },
  { path: ROUTES_ENUM.Info, component: InfoComponent },
  { path: ROUTES_ENUM.Login, component: LoginComponent },
  { path: ROUTES_ENUM.Register, component: RegisterComponent },
  { path: ROUTES_ENUM.Forgot, component: ForgotComponent },
  { path: ROUTES_ENUM.Profile, component: ProfileComponent },
  { path: ROUTES_ENUM.Admin, component: AdminComponent },
  { path: ROUTES_ENUM.AddUser, component: AddUserComponent },
  { path: ROUTES_ENUM.EditUser + "/:id", component: EditUserComponent },
  // default
  { path: "**", redirectTo: "dashboard" },
];

@NgModule({
  exports: [RouterModule],
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule { }
