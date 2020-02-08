import {Component, Input, OnInit} from '@angular/core';
import {AppData} from '../app.component';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent implements OnInit {

  @Input() data: AppData
  constructor() { }

  ngOnInit() {
  }

}
