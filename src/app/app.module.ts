import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NotationRevealModule } from 'ngx-notation-reveal';

import { AppComponent } from './app.component';

import { HIGHLIGHT_OPTIONS, HighlightModule, HighlightOptions } from 'ngx-highlightjs';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, NotationRevealModule, HighlightModule],
    providers: [
        {
            provide: HIGHLIGHT_OPTIONS,
            useValue: <HighlightOptions>{
                coreLibraryLoader: () => import('highlight.js/lib/core'),
                languages: {
                    typescript: () => import('highlight.js/lib/languages/typescript'),
                    xml: () => import('highlight.js/lib/languages/xml'),
                },
            },
        },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
