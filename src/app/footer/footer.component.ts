import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  date: Observable<Date> = new Observable<Date>(obs => {
    setInterval(() => {
      obs.next(new Date());
    }, 1000);
  })
  constructor() { }

  ngOnInit() {
  }

}
