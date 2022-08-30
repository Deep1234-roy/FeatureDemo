import { Component, OnInit,ChangeDetectionStrategy } from '@angular/core';
import {Org_List} from "../../assets/constants";
@Component({
  selector: 'app-style1',
  templateUrl: './style1.component.html',
  styleUrls: ['./style1.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Style1Component implements OnInit {
  //typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers','Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
   //items = Array.from({length: 100000}).map((_, i) => `Item #${i}`);

   items = Org_List.map((obj) => obj.name);
  
  constructor() { }

  ngOnInit(): void {
  }

}
