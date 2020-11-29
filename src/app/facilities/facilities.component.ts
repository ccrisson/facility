import { Component, OnInit } from '@angular/core';
import { FacilityService } from '../facility.service';

@Component({
  selector: 'app-facilities',
  templateUrl: './facilities.component.html',
  styleUrls: ['./facilities.component.css']
})
export class FacilitiesComponent implements OnInit {

  constructor(private facilityService: FacilityService) { }

  ngOnInit(): void {
    //this.facilityService.getFacilities();
  }

}
