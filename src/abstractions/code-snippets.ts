/**
 * Snippets used to display the usage section
 */
export class CodeSnippets {
    /** Code snippet to import module */
    static module = `import { NotationRevealModule } from 'ngx-notation-reveal';
    
@NgModule({
    imports: [NotationRevealModule],
})
export class AppModule {}`;

    /** Code snippet to set component config input */
    static config = `import { RoughAnnotationConfig } from 'ngx-notation-reveal';
    
readonly underline = {
    type: 'underline',
    color: '#F38181',
} as RoughAnnotationConfig;`;

    /** Code snippet to use notation reveal component */
    static html = `<notation-reveal [config]="underline">
    This sentence will be underlined.
</notation-reveal>`;

    /** Code snippet to use reset flag */
    static reset = `<notation-reveal [reset]="false"></notation-reveal>`;

    /** Code snippet to override delay */
    static delay = `<notation-reveal [delay]="5000"></notation-reveal>`;
}
