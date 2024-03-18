import { config as defaultConfig } from '@gluestack-ui/config';
import { createConfig } from '@gluestack-ui/themed';
import { FontResolver } from '@gluestack-style/react';

const config = createConfig({
  ...defaultConfig,
  tokens: {
    ...defaultConfig.tokens,
    colors: {
      ...defaultConfig.tokens.colors,
      white: '#FFFFFF',
      black: '#000000',
      primary0: '#E5F1FB',
      primary50: '#E6F1FB',
      primary100: '#CCE3F8',
      primary200: '#B3D4F4',
      primary300: '#99C6F1',
      primary400: '#80B8ED',
      primary500: '#66AAE9',
      primary600: '#4D9CE6',
      primary700: '#338DE2',
      primary800: '#1A7FDF',
      primary900: '#0071DB',
      primary950: '#000711',

      secondary0: '#FCFCFC',
      secondary50: '#f9fafb',
      secondary100: '#f3f4f6',
      secondary200: '#e4e7eb',
      secondary300: '#d1d5da',
      secondary400: '#9ca3af',
      secondary500: '#6b7280',
      secondary600: '#4b5563',
      secondary700: '#374151',
      secondary800: '#1f2937',
      secondary900: '#111827',
      secondary950: '#171717',

      ina_red: '#D60000',
      ina_orange: '#FF530D',
      ina_yellow: '#FFC801',
      ina_green: '#93C700',
      ina_blue: '#0071DB',
      ina_contrast: '#000000'
    },
    fonts: {
      heading: undefined,
      body: undefined,
      mono: undefined,
    },
  },
  plugins: [
    ...defaultConfig.plugins,
    new FontResolver()
  ],
  components: defaultConfig.components,
} as const);

export { config };

// Get the type of Config
type ConfigType = typeof config;

type Components = typeof defaultConfig.components;
// Extend the internal styled config

declare module '@gluestack-style/react' {
  interface ICustomConfig extends ConfigType { }
  interface ICustomComponents extends Components { }
}
