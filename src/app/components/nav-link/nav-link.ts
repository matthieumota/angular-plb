import { Component, input } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: 'app-nav-link',
  imports: [RouterLink, RouterLinkActive],
  template: `
    <a [routerLink]="to()" class="p-2 border-b border-gray-300 hover:bg-gray-300 flex rounded duration-300" routerLinkActive="bg-gray-300" [routerLinkActiveOptions]="{ exact: true }">
      <ng-content />
    </a>
  `,
})
export class NavLink {
  to = input<string>()
}
