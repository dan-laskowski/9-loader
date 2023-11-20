import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LoaderComponent } from './components/loader/loader.component';
import { LoaderState } from './components/loader/loader.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, LoaderComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  loaderState: LoaderState = LoaderState.isLoading;
  spinnerText: string = 'konfiguracja narzędzi...';
  spinnerIcon: string = '../assets/gear.svg';

  public LOADER_STATE = LoaderState;

  ngOnInit() {
    setTimeout(() => {
      this.loaderState = LoaderState.isReady;
    }, 6000);
  }
}
