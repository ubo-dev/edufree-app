  import { GoogleService } from 'src/app/services/google.service';
import {
  NgModule, Component, Inject, enableProdMode,
} from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { lastValueFrom } from 'rxjs';
import { DxSchedulerModule } from 'devextreme-angular';
import DataSource from 'devextreme/data/data_source';
import CustomStore from 'devextreme/data/custom_store';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent {
  dataSource: any;

  currentDate: Date = new Date(2023,3,28);

  constructor(private http: HttpClient) {
    this.dataSource = new DataSource({
      store: new CustomStore({
        load: (options: any) => this.getData(options, { showDeleted: false }),
      }),
    });
  }

  private getData(options: any, requestOptions: any) {
    const PUBLIC_KEY = 'AIzaSyBnNAISIUKe6xdhq1_rjor2rxoI3UlMY7k';
    const CALENDAR_ID = 'f7jnetm22dsjc3npc2lu3buvu4@group.calendar.google.com';
    const dataUrl = ['https://www.googleapis.com/calendar/v3/calendars/',
      CALENDAR_ID, '/events?key=', PUBLIC_KEY].join('');

    return lastValueFrom(this.http.get(dataUrl, requestOptions))
      .then((data: any) => data.items);
  }
}


