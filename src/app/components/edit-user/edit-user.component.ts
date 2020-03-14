import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { BooleanHelper } from "src/app/utilities/boolean.util";
import { UserService } from "src/app/services/user.service";
import { User } from "src/app/models/User.model";

@Component({
  selector: "app-edit-user",
  templateUrl: "./edit-user.component.html",
  styleUrls: ["./edit-user.component.css"]
})
export class EditUserComponent implements OnInit {
  public user: User = null;

  public get ready(): boolean {
    return BooleanHelper.hasValue(this.user);
  }

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
  ) { }

  public ngOnInit() {
    this.loadUser();
  }

  public toggleAdmin() {
    let dialogText;
    if (this.user.admin) {
      dialogText = `Are you sure you want to remove the admin rights for ${this.user.email}?`;
    } else {
      dialogText = `Are you sure you want to give admin rights to ${this.user.email}?`;
    }
    const confirmToggle = confirm(dialogText);
    if (confirmToggle) {
      this.submitToggleAdmin();
    }
  }

  public setSpecialAccess() {
    let response;
    this.userService.editAccess(this.user.email, this.user.specialAccess)
      .subscribe((res) => response = res,
        (error) => {
          console.log(error);
          console.log("edit access failed");
        }, () => {
          this.loadUser();
        });
  }

  private loadUser(): void {
    this.user = null;
    const userId = this.route.snapshot.paramMap.get("id");
    this.userService.getUser(userId)
      .subscribe((res) => this.user = res,
        (error) => {
          console.log("get user failed");
        });
  }

  private submitToggleAdmin() {
    let response;
    this.userService.setAdmin(this.user.email, !this.user.admin)
      .subscribe((res) => response = res,
        (error) => {
          console.log(error);
          console.log("edit admin failed");
        }, () => {
          this.loadUser();
        });
  }

}
