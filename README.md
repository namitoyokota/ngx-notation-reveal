<h1 align="center"><img height="150" src="https://raw.githubusercontent.com/namitoyokota/ngx-notation-reveal/master/src/assets/logo.png" /><br> Notation Reveal</h1>

<p align="center">
    <a href="https://github.com/namitoyokota/ngx-notation-reveal/blob/master/LICENSE">
        <img alt="GitHub License" src="https://img.shields.io/github/license/namitoyokota/ngx-notation-reveal" />
    </a>
    <a href="https://www.npmjs.com/package/ngx-notation-reveal">
        <img alt="NPM Version" src="https://img.shields.io/npm/v/ngx-notation-reveal.svg" />
    </a>
    <a href="https://www.npmjs.com/package/ngx-notation-reveal">
        <img alt="NPM Downloads" src="https://img.shields.io/npm/dt/ngx-notation-reveal" />
    </a>
</p>

<p align="center">
    <b>Notation Reveal</b> is an Angular component to add the Rough Notation animation when element scrolls into view.
</p>

## Demo

![Demo Gif](https://raw.githubusercontent.com/namitoyokota/ngx-notation-reveal/master/src/assets/demo.gif)

View the [live demo](https://notation-reveal.namitoyokota.com/) or [CodeSandbox](https://codesandbox.io/p/devbox/ngx-notation-reveal-demo-mf875r)!

## Installation

Install using a package manager:

```shell
npm i ngx-notation-reveal
```

or

```shell
yarn add ngx-notation-reveal
```

## Usage

First, import the module.

```typescript
import { NotationRevealModule } from 'ngx-notation-reveal';

@NgModule({
    imports: [NotationRevealModule],
})
export class AppModule {}
```

Next, set up a config property. You can read all annotation types on Rough Notation's official documentation.

```typescript
import { RoughAnnotationConfig } from 'ngx-notation-reveal';

readonly underline = {
    type: 'underline',
    color: '#F38181',
} as RoughAnnotationConfig;
```

Lastly, add component in the HTML.

```html
<notation-reveal [config]="underline">This sentence will be underlined.</notation-reveal>
```

## API

This readonly component takes in the following properties as inputs:

| Name     | Type                                                                                                                 | Default | Description                                                         |
| -------- | -------------------------------------------------------------------------------------------------------------------- | ------- | ------------------------------------------------------------------- |
| `config` | [RoughAnnotationConfig](https://github.com/rough-stuff/rough-notation?tab=readme-ov-file#configuring-the-annotation) |         | Styling of the annotation.                                          |
| `reset`  | boolean                                                                                                              | true    | Whether to re-animate annotation each time element enters viewport. |
| `delay`  | number                                                                                                               | 1000    | Time before animation after element enters viewport (in ms).        |

## License

[MIT](https://github.com/namitoyokota/ngx-notation-reveal/blob/master/LICENSE) &copy; [Namito Yokota](https://www.namitoyokota.com)
