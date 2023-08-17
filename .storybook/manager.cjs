import { addons } from '@storybook/addons';
import { withDesign } from 'storybook-addon-designs';
import theme from './theme.cjs';

addons.setConfig({
  theme: theme,
});

export const decorators = [withDesign];