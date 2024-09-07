/* eslint-disable */
/* tslint:disable */
/* auto-generated vue proxies */
import { defineContainer } from './vue-component-lib/utils';

import type { JSX } from '@korinovsky/ui-kit-core/components';

import { defineCustomElement as defineMyComponent } from '@korinovsky/ui-kit-core/components/my-component.js';
import { defineCustomElement as defineUiButton } from '@korinovsky/ui-kit-core/components/ui-button.js';


export const MyComponent = /*@__PURE__*/ defineContainer<JSX.MyComponent>('my-component', defineMyComponent, [
  'first',
  'middle',
  'last'
]);


export const UiButton = /*@__PURE__*/ defineContainer<JSX.UiButton>('ui-button', defineUiButton, [
  'color',
  'size'
]);

