import { AfterViewInit, Component, ElementRef, Input, OnDestroy, ViewChild } from '@angular/core';
import { annotate } from 'rough-notation';
import { RoughAnnotation, RoughAnnotationConfig } from 'rough-notation/lib/model';

@Component({
    selector: 'notation-reveal',
    templateUrl: 'notation-reveal.component.html',
    styleUrls: ['notation-reveal.component.scss'],
})
export class NotationRevealComponent implements AfterViewInit, OnDestroy {
    /** Annotation settings */
    @Input() config: RoughAnnotationConfig;

    /** Whether to re-animate after initial view */
    @Input() reset = true;

    /** Highlight animation delay in milliseconds (default: 1000ms) */
    @Input() delay = 1000;

    /** Element ref to annotate */
    @ViewChild('elementToAnnotate') elementToAnnotate: ElementRef;

    /** Annotation object from rough notation */
    private annotation: RoughAnnotation;

    /** Used to detect when element is in view */
    private observer: IntersectionObserver;

    constructor() {}

    /**
     * On init lifecycle hook
     */
    ngAfterViewInit(): void {
        this.annotation = annotate(this.elementToAnnotate.nativeElement, this.config);

        this.observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setTimeout(() => this.annotation.show(), this.delay);
            } else if (this.reset) {
                this.annotation.hide();
            }
        });

        this.observer.observe(this.elementToAnnotate.nativeElement);
    }

    /**
     * On destroy lifecycle hook
     */
    ngOnDestroy(): void {
        this.observer.disconnect();
    }
}
