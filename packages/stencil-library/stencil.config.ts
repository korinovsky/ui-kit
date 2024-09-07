import { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target';
import { angularOutputTarget } from '@stencil/angular-output-target';
import { vueOutputTarget } from '@stencil/vue-output-target';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'stencil-library',
  plugins: [
    sass()
  ],
  outputTargets: [
    // {
    //   type: 'dist',
    //   esmLoaderPath: '../loader',
    // },
    {
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'auto-define-custom-elements',
      externalRuntime: false,
    },
    // {
    //   type: 'docs-readme',
    // },
    // {
    //   type: 'www',
    //   serviceWorker: null, // disable service workers
    // },
    reactOutputTarget({
      // Relative path to where the React components will be generated
      outDir: '../react-library/lib/components/stencil-generated/',
    }),
    angularOutputTarget({
      componentCorePackage: '@korinovsky/ui-kit-core',
      directivesProxyFile: '../angular-workspace/projects/angular-library/src/lib/stencil-generated/components.ts',
      // This is what tells the target to use the custom elements output
      outputType: 'standalone' // or 'scam'
    }),
    vueOutputTarget({
      componentCorePackage: '@korinovsky/ui-kit-core',
      proxiesFile: '../vue-library/lib/components.ts',
      includeImportCustomElements: true,
    }),
  ],
  testing: {
    browserHeadless: "new",
  },
};
