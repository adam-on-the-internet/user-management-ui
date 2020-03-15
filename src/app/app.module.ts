import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { InfoComponent } from "./components/info/info.component";
import { AppRoutingModule } from "./app-routing.module";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { FooterComponent } from "./components/footer/footer.component";
import { HttpClientModule } from "@angular/common/http";
import { ActuatorReportComponent } from "./components/actuator-report/actuator-report.component";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { ProfileComponent } from "./components/profile/profile.component";
import { AdminComponent } from "./components/admin/admin.component";
import { ForgotComponent } from "./components/forgot/forgot.component";
import { AddUserComponent } from "./components/add-user/add-user.component";
import { EditUserComponent } from "./components/edit-user/edit-user.component";
import { ProfileEditEmailComponent } from "./components/profile-edit-email/profile-edit-email.component";
import { ProfileEditPasswordComponent } from "./components/profile-edit-password/profile-edit-password.component";
import { ServiceCheckComponent } from "./components/service-check/service-check.component";
import { UserOverviewComponent } from "./components/user-overview/user-overview.component";
import { LogViewerComponent } from "./components/log-viewer/log-viewer.component";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    InfoComponent,
    NavbarComponent,
    FooterComponent,
    ActuatorReportComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    AdminComponent,
    ForgotComponent,
    AddUserComponent,
    EditUserComponent,
    ProfileEditEmailComponent,
    ProfileEditPasswordComponent,
    ServiceCheckComponent,
    UserOverviewComponent,
    LogViewerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
