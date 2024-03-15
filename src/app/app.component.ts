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

    readonly javascript = `console.log('hello world!')`;
    readonly html = `<h1>Hello world!</h1>`;

    copied = false;

    constructor() {}

    copyToClipboard(text: string): void {
        navigator.clipboard.writeText(text);
        this.copied = true;
    }
}
