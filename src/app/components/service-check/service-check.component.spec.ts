import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ServiceCheckComponent } from "./service-check.component";
import { ActuatorReportComponent } from "../actuator-report/actuator-report.component";
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe("ServiceCheckComponent", () => {
  let component: ServiceCheckComponent;
  let fixture: ComponentFixture<ServiceCheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ServiceCheckComponent, ActuatorReportComponent],
      imports: [HttpClientTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
