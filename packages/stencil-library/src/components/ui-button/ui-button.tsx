import { Component, h, Prop } from '@stencil/core';
import classNames from 'classnames';

@Component({
    tag: 'ui-button',
    styleUrl: './ui-button.scss'
})
export class UiButton {
    @Prop() color: "green" | "black" | "gray" | "white" = 'green';
    @Prop() size: "l" | "m" | "s" = 's';

    getClassName() {
        return classNames("ui-button", "ui-button_" + this.color, "ui-button_" + this.size)
    }

    render() {
        return <button class={this.getClassName()}><slot /></button>
    }
}