import { Component, OnInit } from "@angular/core";
import { User } from "src/app/models/User.model";
import { BooleanHelper } from "src/app/utilities/boolean.util";
import { UserService } from "src/app/services/user.service";
import { NavHelperService } from "src/app/services/nav-helper.service";

@Component({
  selector: "app-user-overview",
  templateUrl: "./user-overview.component.html",
  styleUrls: ["./user-overview.component.css"]
})
export class UserOverviewComponent implements OnInit {
  public users: User[] = null;

  public get ready(): boolean {
    return BooleanHelper.hasValue(this.users);
  }

  constructor(
    private userService: UserService,
    private navHelper: NavHelperService,
  ) { }

  public ngOnInit() {
    this.loadUsers();
  }

  public addUser() {
    this.navHelper.goToAddUser();
  }

  public deleteUser(user: User) {
    const confirmDelete = confirm(`Are you sure you want to delete ${user.email}?`);
    if (confirmDelete) {
      this.submitDelete(user);
    }
  }

  public editUser(user: User) {
    this.navHelper.goToEditUser(user._id);
  }

  private submitDelete(user: User) {
    let response;
    this.userService.deleteUser(user._id)
      .subscribe((res) => response = res,
        (error) => {
          console.log(error);
          console.log("delete user failed");
        }, () => {
          this.loadUsers();
        });
  }

  private loadUsers(): void {
    this.users = null;
    this.userService.getAllUsers()
      .subscribe((res) => this.users = res,
        (error) => {
          console.log("get users failed");
        });
  }

}
