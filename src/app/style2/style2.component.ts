import { Component, OnInit } from '@angular/core';
import { Org_List } from "../../assets/constants";
import { OrganizationList } from '../model/orgList.model';
@Component({
  selector: 'app-style2',
  templateUrl: './style2.component.html',
  styleUrls: ['./style2.component.css']
})
export class Style2Component implements OnInit {

  panelOpenOrg = true;
  panelOpenFacilities = false;
  facilities = [];
  organizationList : OrganizationList[] = Org_List;

  constructor() { }

  ngOnInit(): void {
  }

  getFacilities(org:any) {
    this.panelOpenOrg = false;
    this.panelOpenFacilities = true;
    this.facilities = [];
    if (org) {
      this.facilities = org.facilities;
    }
  }

}
