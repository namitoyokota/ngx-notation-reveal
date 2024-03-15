import { Component, Input } from '@angular/core';
import { fadeInOnEnterAnimation, fadeOutOnLeaveAnimation } from 'angular-animations';

@Component({
    selector: 'snippet',
    templateUrl: './snippet.component.html',
    styleUrls: ['./snippet.component.scss'],
    animations: [fadeInOnEnterAnimation(), fadeOutOnLeaveAnimation()],
})
export class SnippetComponent {
    @Input() code = '';

    @Input() language = '';

    copied = false;

    constructor() {}

    copyToClipboard(): void {
        navigator.clipboard.writeText(this.code);
        this.copied = true;
        setTimeout(() => (this.copied = false), 5000);
    }
}
