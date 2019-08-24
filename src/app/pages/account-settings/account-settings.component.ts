import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { SettingsService } from '../../services/service.index';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  constructor(
    @Inject(DOCUMENT) private DOCUMENT,
    private settingsService: SettingsService
  ) { }

  ngOnInit() {
    this.applyCheck();
  }

  public changeTheme( color: string, link: any ) {
    this.changeSelector(link);
    this.settingsService.applyTheme(color);
  }

  private changeSelector(link: any) {
    const selectors = this.DOCUMENT.getElementsByClassName('selector');
    for (const ref of selectors) {
      ref.classList.remove('working');
    }
    link.classList.add('working');
  }

  private applyCheck() {
    const selectors = this.DOCUMENT.getElementsByClassName('selector');
    const tema = this.settingsService.settings.tema;
    for (const ref of selectors) {
      if (ref.getAttribute('data-theme') === tema) {
        ref.classList.add('working');
        break;
      }
    }
  }
}
