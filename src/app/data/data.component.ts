import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AppData} from '../app.component';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent implements OnInit {

  @Input() data: AppData;
  @Output() onRemove = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }

  removeData() {
    this.onRemove.emit(this.data.id);
  }

}
