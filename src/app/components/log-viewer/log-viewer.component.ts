import { Component, OnInit } from "@angular/core";
import { BooleanHelper } from "src/app/utilities/boolean.util";
import { LogService } from "src/app/services/log.service";
import { Log } from "src/app/models/Log.model";

@Component({
  selector: "app-log-viewer",
  templateUrl: "./log-viewer.component.html",
  styleUrls: ["./log-viewer.component.css"]
})
export class LogViewerComponent implements OnInit {
  public logs: Log[] = null;

  public get ready(): boolean {
    return BooleanHelper.hasValue(this.logs);
  }

  constructor(
    private logService: LogService,
  ) { }

  public ngOnInit() {
    this.loadLogs();
  }

  private loadLogs(): void {
    this.logs = null;
    this.logService.getAllLogs()
      .subscribe((res) => this.logs = res,
        (error) => {
          console.log("get logs failed");
        });
  }

}
