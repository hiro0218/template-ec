import html from './index.html';
import { storiesOf } from '@storybook/html';

storiesOf('template/component', module)
  .add('button', () => html);
