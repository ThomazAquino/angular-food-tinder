import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from './core/local-storage/local-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  constructor(private localStorageService: LocalStorageService) {}

  ngOnInit(): void {
    this.localStorageService.testLocalStorage();
  }
}
