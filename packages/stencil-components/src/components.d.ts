/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface MySimpleScoped {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
    interface MySimpleShadow {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
}
declare global {
    interface HTMLMySimpleScopedElement extends Components.MySimpleScoped, HTMLStencilElement {
    }
    var HTMLMySimpleScopedElement: {
        prototype: HTMLMySimpleScopedElement;
        new (): HTMLMySimpleScopedElement;
    };
    interface HTMLMySimpleShadowElement extends Components.MySimpleShadow, HTMLStencilElement {
    }
    var HTMLMySimpleShadowElement: {
        prototype: HTMLMySimpleShadowElement;
        new (): HTMLMySimpleShadowElement;
    };
    interface HTMLElementTagNameMap {
        "my-simple-scoped": HTMLMySimpleScopedElement;
        "my-simple-shadow": HTMLMySimpleShadowElement;
    }
}
declare namespace LocalJSX {
    interface MySimpleScoped {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface MySimpleShadow {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface IntrinsicElements {
        "my-simple-scoped": MySimpleScoped;
        "my-simple-shadow": MySimpleShadow;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "my-simple-scoped": LocalJSX.MySimpleScoped & JSXBase.HTMLAttributes<HTMLMySimpleScopedElement>;
            "my-simple-shadow": LocalJSX.MySimpleShadow & JSXBase.HTMLAttributes<HTMLMySimpleShadowElement>;
        }
    }
}
