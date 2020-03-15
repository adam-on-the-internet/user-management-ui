import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { RestUrlBuilder } from "../utilities/rest-url-builder.util";
import { ServiceUrl } from "../constants/rest.constants";
import { HttpClient } from "@angular/common/http";
import { CookieHelper } from "../utilities/cookie.util";
import { Log } from "../models/Log.model";

@Injectable({
  providedIn: "root"
})
export class LogService {

  constructor(
    private http: HttpClient,
  ) { }

  public getAllLogs(): Observable<Log[]> {
    const url = RestUrlBuilder.buildRestUrl({
      service: ServiceUrl.BasicExpress,
      controller: "log"
    });
    return this.http.get(url, CookieHelper.authHeaders) as Observable<Log[]>;
  }

  public log(log: Log): Observable<any> {
    const url = RestUrlBuilder.buildRestUrl({
      service: ServiceUrl.BasicExpress,
      controller: "log"
    });
    return this.http.post(url, log, CookieHelper.authHeaders) as Observable<any>;
  }
}
