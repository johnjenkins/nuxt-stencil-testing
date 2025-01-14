import { Plugin } from "vue";
import { defineCustomElements } from "stencil-components/loader";

export const ComponentLibrary: Plugin = {
  async install() {
    defineCustomElements();
  },
};
