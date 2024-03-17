import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HIGHLIGHT_OPTIONS, HighlightModule, HighlightOptions } from 'ngx-highlightjs';
import { NotationRevealModule } from 'ngx-notation-reveal';
import { AppComponent } from './app.component';
import { SnippetComponent } from './snippet/snippet.component';

@NgModule({
    declarations: [AppComponent, SnippetComponent],
    imports: [BrowserModule, BrowserAnimationsModule, NotationRevealModule, HighlightModule],
    providers: [
        {
            provide: HIGHLIGHT_OPTIONS,
            useValue: <HighlightOptions>{
                coreLibraryLoader: () => import('highlight.js/lib/core'),
                languages: {
                    typescript: () => import('highlight.js/lib/languages/typescript'),
                    xml: () => import('highlight.js/lib/languages/xml'),
                    node: () => import('highlight.js/lib/languages/node-repl'),
                },
            },
        },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
