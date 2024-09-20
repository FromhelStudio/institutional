import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-site-action-header',
  templateUrl: './site-action-header.component.html',
  styleUrl: './site-action-header.component.scss'
})
export class SiteActionHeaderComponent {
  showHiddenSystems = signal<boolean>(false)
}
