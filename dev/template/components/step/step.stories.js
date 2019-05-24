import html from './index.html';
import { storiesOf } from '@storybook/html';

storiesOf('template/components', module)
  .add('step', () => html);
