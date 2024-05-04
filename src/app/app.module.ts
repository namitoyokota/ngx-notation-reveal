import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CodeSnippetModule } from 'ngx-code-snippet';
import { NotationRevealModule } from 'ngx-notation-reveal';
import { AppComponent } from './app.component';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, BrowserAnimationsModule, NotationRevealModule, CodeSnippetModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
