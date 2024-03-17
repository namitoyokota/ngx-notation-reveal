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
    static config = `readonly underline = {
    type: 'underline',
    color: '#F38181',
} as RoughAnnotationConfig;`;

    /** Code snippet to use notation reveal component */
    static html = `<notation-reveal [config]="underline">
    This sentence will be underlined.
</notation-reveal>`;

    /** Code snippet to use reset flag */
    static reset = `<notation-reveal [config]="underline" [reset]="false"></notation-reveal>`;
}
