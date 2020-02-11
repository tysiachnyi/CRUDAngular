import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, observable} from 'rxjs';
import {delay, tap} from 'rxjs/operators';

export interface AppData {
  title: string;
  body: string;
  id?: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public loading = true;
    search = '';
    searchField = 'title'
    title = 'my App';
    data: AppData[] = [];

    constructor(private http: HttpClient) {}

      fetchData(): Observable<AppData[]> {
        return this.http.get<AppData[]>('https://jsonplaceholder.typicode.com/posts?_limit=10')
          .pipe(tap(datas => this.data = datas));
      }


  updateData(newData: AppData) {
        this.data.unshift(newData);
    }

    removePost(id: number) {
        this.data = this.data.filter(d => d.id !== id);
    }

    ngOnInit(): void {
      this.fetchData()
        .pipe(delay(500))
        .subscribe(() => {
        this.loading = false;
      });
    }
}
