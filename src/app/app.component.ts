import { Component } from '@angular/core';
import { CodeSnippets } from 'src/abstractions/code-snippets';
import { NotationConfigs } from 'src/abstractions/notation-config';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    /** Snippets to display in the usage section */
    readonly snippets = CodeSnippets;

    /** Rough notation configurations for demo */
    readonly configs = NotationConfigs;
}
