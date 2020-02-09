import { Component } from '@angular/core';

export interface AppData {
  title: string;
  comment: string;
  id?: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'my App';
    data: AppData[] = [
        {title: 'First data', comment: 'First comment', id: 1},
        {title: 'Second data', comment: 'Second comment', id: 2}
  ];

    updateData(newData: AppData) {
        this.data.unshift(newData);
    }

    removePost(id: number) {
        this.data = this.data.filter(d => d.id !== id);
    }
}
