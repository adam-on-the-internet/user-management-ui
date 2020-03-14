import { Component } from "@angular/core";
import { ServiceUrl } from "src/app/constants/rest.constants";

@Component({
  selector: "app-service-check",
  templateUrl: "./service-check.component.html",
  styleUrls: ["./service-check.component.css"]
})
export class ServiceCheckComponent {
  public basicExpressServiceUrl = ServiceUrl.BasicExpress;
}
