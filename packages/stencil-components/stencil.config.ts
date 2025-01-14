import { Config } from '@stencil/core';
import { vueOutputTarget } from '@stencil/vue-output-target';

export const config: Config = {
  namespace: 'components',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'auto-define-custom-elements',
      externalRuntime: false,
    },
    {
      type: 'dist-hydrate-script',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
    vueOutputTarget({
      componentCorePackage: 'stencil-components',
      proxiesFile: '../vue-wrapper/lib/components.ts',
      includePolyfills: false,

      componentModels: [
        {
          elements: ['my-input'],
          targetAttr: 'customValue',
          event: 'my-did-change',
        },
      ],
    }),
  ],
  extras: {
    enableImportInjection: true,
    experimentalSlotFixes: true,
    experimentalScopedSlotChanges: true,
    scopedSlotTextContentFix: true,
  },
  // sourceMap: false,
};
