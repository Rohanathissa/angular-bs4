import { Injectable } from '@angular/core';

export class AppConstants {
}
@Injectable()
export class Configuration {
    public server = 'http://127.0.0.1:80/';
    public apiUrl = 'iotdev_meter';
    public serverWithApiUrl = this.server + this.apiUrl;
}