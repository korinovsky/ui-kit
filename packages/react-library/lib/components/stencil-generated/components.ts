'use client';

/**
 * This file was automatically generated by the Stencil React Output Target.
 * Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
 */

/* eslint-disable */

import { MyComponent as MyComponentElement, defineCustomElement as defineMyComponent } from "@korinovsky/ui-kit-core/dist/components/my-component.js";
import { UiButton as UiButtonElement, defineCustomElement as defineUiButton } from "@korinovsky/ui-kit-core/dist/components/ui-button.js";
import type { StencilReactComponent } from '@stencil/react-output-target/runtime';
import { createComponent } from '@stencil/react-output-target/runtime';
import React from 'react';

type MyComponentEvents = NonNullable<unknown>;

export const MyComponent: StencilReactComponent<MyComponentElement, MyComponentEvents> = /*@__PURE__*/ createComponent<MyComponentElement, MyComponentEvents>({
    tagName: 'my-component',
    elementClass: MyComponentElement,
    react: React,
    events: {} as MyComponentEvents,
    defineCustomElement: defineMyComponent
});

type UiButtonEvents = NonNullable<unknown>;

export const UiButton: StencilReactComponent<UiButtonElement, UiButtonEvents> = /*@__PURE__*/ createComponent<UiButtonElement, UiButtonEvents>({
    tagName: 'ui-button',
    elementClass: UiButtonElement,
    react: React,
    events: {} as UiButtonEvents,
    defineCustomElement: defineUiButton
});
