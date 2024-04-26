import { AfterViewInit, Component, ElementRef, Input, NgZone, OnDestroy } from '@angular/core';
import { annotate } from 'rough-notation';
import { RoughAnnotation, RoughAnnotationConfig } from 'rough-notation/lib/model';
import { asyncScheduler } from 'rxjs';

@Component({
    selector: 'notation-reveal',
    template: '<ng-content></ng-content>',
    styles: ':host { display: inline-block}',
})
export class NotationRevealComponent implements AfterViewInit, OnDestroy {
    /** Annotation settings */
    @Input() config: RoughAnnotationConfig;

    /** Whether to re-animate after initial view */
    @Input() reset = true;

    /** Highlight animation delay in milliseconds (default: 1000ms) */
    @Input() delay = 1000;

    /** Annotation object from rough notation */
    private annotation: RoughAnnotation;

    /** Used to detect when element is in view */
    private observer: IntersectionObserver;

    constructor(private elementRef: ElementRef, private ngZone: NgZone) {}

    /**
     * On init lifecycle hook
     */
    ngAfterViewInit(): void {
        this.ngZone.runOutsideAngular(() => {
            this.observer = new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting) {
                    asyncScheduler.schedule(() => this.annotation.show(), this.delay);
                } else if (this.reset) {
                    this.annotation.hide();
                }
            });

            this.annotation = annotate(this.elementRef.nativeElement, this.config);
            this.observer.observe(this.elementRef.nativeElement);
        });
    }

    /**
     * On destroy lifecycle hook
     */
    ngOnDestroy(): void {
        this.observer?.disconnect();
    }
}
