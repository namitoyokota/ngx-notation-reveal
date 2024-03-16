import { Component, Input } from '@angular/core';
import { fadeInOnEnterAnimation, fadeOutOnLeaveAnimation } from 'angular-animations';

@Component({
    selector: 'snippet',
    templateUrl: './snippet.component.html',
    styleUrls: ['./snippet.component.scss'],
    animations: [fadeInOnEnterAnimation(), fadeOutOnLeaveAnimation()],
})
export class SnippetComponent {
    /** Code snippet to display */
    @Input() code = '';

    /** Format of the code */
    @Input() language = '';

    /** Whether copy button has been pressed */
    copied = false;

    constructor() {}

    /**
     * Copies code to the clipboard
     */
    copyToClipboard(): void {
        navigator.clipboard.writeText(this.code);
        this.copied = true;
        setTimeout(() => (this.copied = false), 5000);
    }
}
