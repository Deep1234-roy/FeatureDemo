import { Component, OnInit } from '@angular/core';
import { OrganizationList } from '../model/orgList.model';
import { Org_List } from 'src/assets/constants';

@Component({
  selector: 'app-style3',
  templateUrl: './style3.component.html',
  styleUrls: ['./style3.component.css']
})
export class Style3Component implements OnInit {

  selectedOrganization : string | undefined;
  organizationFacilities :string | undefined | null;
  facilities :any =[];
  constructor() { }
  organizationList : OrganizationList[] = Org_List;

  getSelectedOrganization(org: any) {
    this.selectedOrganization =  org;
    if(org){
      this.facilities = org.facilities;
    }
  }

  goBack(){
    this.facilities =[];
  }

  ngOnInit(): void {
  }

}
