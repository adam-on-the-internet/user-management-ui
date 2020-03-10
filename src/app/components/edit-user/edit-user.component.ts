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

  private loadUser(): void {
    this.user = null;
    const userId = this.route.snapshot.paramMap.get("id");
    this.userService.getUser(userId)
      .subscribe((res) => this.user = res,
        (error) => {
          console.log("get user failed");
        });
  }

}
