import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FaConfig, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fontAwesomeIcons } from './shared/font-awesome-icons';

@Component({
  imports: [ RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
    private faIconLibrary = inject(FaIconLibrary);
    private faConfig = inject(FaConfig);

    ngOnInit(): void {
      this.initFontAwesome();
    }

    private initFontAwesome(): void {
      this.faConfig.defaultPrefix = 'far';
      this.faIconLibrary.addIcons(...fontAwesomeIcons);
    }
}
