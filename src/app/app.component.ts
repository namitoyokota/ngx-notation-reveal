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

    readonly html = `<notation-reveal [config]="underline" [reset]="false">
    This sentence will be underlined.
</notation-reveal>`;

    readonly javascript = `readonly underline = {
    type: 'underline',
    color: '#F38181',
} as RoughAnnotationConfig;;`;

    copied = false;

    constructor() {}

    copyToClipboard(text: string): void {
        navigator.clipboard.writeText(text);
        this.copied = true;
    }
}
