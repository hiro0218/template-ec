import './_index.scss';
import { storiesOf } from '@storybook/html';

storiesOf('template/component', module)
  .add('button', () => `
    <div class="c-button">plain</div>
    <div class="c-button is-primary">primary</div>
    <div class="c-button is-apply">apply</div>
    <div class="c-button is-disable">disable</div>
  `);
