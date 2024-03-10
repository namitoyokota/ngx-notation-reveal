import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NotationRevealModule } from 'ngx-notation-reveal';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, NotationRevealModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
