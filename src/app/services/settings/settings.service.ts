import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  public settings: Settings = {
    temaUrl: 'assets/css/colors/default.css',
    tema: 'default'
  };

  constructor(
    @Inject(DOCUMENT) private DOCUMENT,
  ) {
    this.getSettings();
  }

  saveSettings() {
    localStorage.setItem('settings', JSON.stringify(this.settings));
  }

  getSettings() {
    if (localStorage.getItem('settings')) {
      this.settings = JSON.parse(localStorage.getItem('settings'));
      this.applyTheme(this.settings.tema);
    }
  }

  applyTheme(theme: string) {
    const url = `assets/css/colors/${theme}.css`;
    this.DOCUMENT.getElementById('theme').setAttribute('href', url);
    this.settings.tema = theme;
    this.settings.temaUrl = url;
    this.saveSettings();
  }
}

interface Settings {
  temaUrl: string;
  tema: string;
}
