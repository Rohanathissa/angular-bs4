import { Component, OnInit } from '@angular/core';

import { MeterService } from '../meter.service';

import {DeviceService} from '../device.service';



// import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-meter',
  templateUrl: './meter.component.html',
  styleUrls: ['./meter.component.scss']
})
export class MeterComponent implements OnInit {

  public values: any[];
  public meterdata: any[];
  public devices:any[];

  constructor(
    private dataService: MeterService, private deviceData: DeviceService) { 
  }


ngOnInit() {
  this.dataService
    .getAll<any[]>()
    .subscribe((data: any[]) =>{
      this.meterdata = data;
      console.log(data)
      
    }
  );

  this.deviceData
  .getAll<any[]>()
  .subscribe((devicesData:any[])=>{
    this.devices = devicesData;
    console.log(devicesData)
  });
}

}
