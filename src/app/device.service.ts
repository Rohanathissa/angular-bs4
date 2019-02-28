import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Configuration } from '../app/app.constants';

@Injectable()
export class DeviceService {

  private actionUrl: string;

  constructor(private http: HttpClient, private configuration: Configuration) {
      this.actionUrl = configuration.serverWithApiUrl + '/iotadmin.iot_admin/device/';
  }
  public getAll<T>(): Observable<T> {
    // console.log(this.actionUrl);
      return this.http.get<T>(this.actionUrl);
  }

}

@Injectable()
export class CustomInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (!req.headers.has('Content-Type')) {
            req = req.clone({ headers: req.headers.set('Content-Type', 'application/json') });
        }

        req = req.clone({ headers: req.headers.set('Accept', 'application/json') });

        console.log(req);
         
        return next.handle(req);
    }
}