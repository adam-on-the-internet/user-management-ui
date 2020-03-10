import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { BooleanHelper } from "src/app/utilities/boolean.util";

@Component({
  selector: "app-edit-user",
  templateUrl: "./edit-user.component.html",
  styleUrls: ["./edit-user.component.css"]
})
export class EditUserComponent implements OnInit {
  public userId: string = null;

  public get ready(): boolean {
    return BooleanHelper.hasValue(this.userId);
  }

  constructor(
    private route: ActivatedRoute,
  ) { }

  public ngOnInit() {
    this.userId = this.route.snapshot.paramMap.get("id");
  }

}
