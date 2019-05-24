import '../dev/src/index.scss';
import { configure } from '@storybook/html';

// automatically import all files ending in *.stories.js
const req = require.context('../dev', true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
