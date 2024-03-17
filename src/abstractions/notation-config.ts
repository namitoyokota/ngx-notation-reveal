import { RoughAnnotationConfig } from 'rough-notation/lib/model';

/**
 * Configurations used for the demo section
 */
export class NotationConfigs {
    /** Underline text with a pink color */
    static underline = {
        type: 'underline',
        color: '#FF6392',
    } as RoughAnnotationConfig;

    /** Circle text with a green color */
    static circle = {
        type: 'circle',
        color: '#7ae582',
    } as RoughAnnotationConfig;

    /** Box text with a blue color */
    static box = {
        type: 'box',
        color: '#7FC8F8',
    } as RoughAnnotationConfig;

    /** Highlight text with a yellow color */
    static highlight = {
        type: 'highlight',
        color: '#FFE45E',
    } as RoughAnnotationConfig;
}
