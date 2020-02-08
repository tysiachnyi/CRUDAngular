import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AppData} from '../app.component';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.scss']
})
export class DataFormComponent implements OnInit {

  @Output() addData: EventEmitter<AppData> = new EventEmitter<AppData>();
  title = ''
  comment = ''

  constructor() { }

  ngOnInit() {
  }

  clickAddBtn() {
    if (this.title.trim() && this.comment.trim()) {
      const data: AppData = {
        title: this.title,
        comment: this.comment
      };
      this.addData.emit(data);
      this.title = this.comment = '';
      }
    }
}
