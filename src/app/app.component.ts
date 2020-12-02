import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  projects: any;

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    this.httpClient.get(environment.apiUrl)
      .subscribe(response => this.projects = response);
  }

}
