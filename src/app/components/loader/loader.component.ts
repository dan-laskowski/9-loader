import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

export enum LoaderState {
  isReady = 0,
  isLoading = 1,
}

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.css',
})
export class LoaderComponent {
  @Input() spinnerText: string = '';
  @Input() spinnerIcon: string = '../../../assets/spinner.svg';

  @Input() loaderState: LoaderState = LoaderState.isLoading;

  public LOADER_STATE = LoaderState;
}
