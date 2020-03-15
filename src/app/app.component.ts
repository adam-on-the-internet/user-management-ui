import { Component, OnInit } from "@angular/core";
import { LogService } from "./services/log.service";
import { Log } from "./models/Log.model";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "UserManagement";

  constructor(
    private logService: LogService,
  ) { }

  public ngOnInit() {
    this.logStart();
  }

  private logStart(): void {
    const startLog: Log = {
      application: "user-management-ui",
      level: "info",
      message: "application visited"
    };
    let response;
    this.logService.log(startLog)
      .subscribe((res) => response = res,
        (error) => {
          console.log("start log failed");
        });
  }
}
