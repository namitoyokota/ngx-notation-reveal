import { Component } from '@angular/core';
import { NotationConfigs } from 'src/abstractions/notation-config';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    readonly underline = NotationConfigs.underline;
    readonly circle = NotationConfigs.circle;
    readonly box = NotationConfigs.box;
}