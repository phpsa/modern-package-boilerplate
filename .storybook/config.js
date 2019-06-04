import { configure } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';
import './assets/prism';
import './assets/normalize.css';
import './assets/skeleton.css';
import './assets/prism.css';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/nova-light/theme.css'
import 'primereact/resources/primereact.min.css'
import './assets/styles.css';


setOptions({
	name: '...',
	url: '...'
  });

const loadStories = () => {
	require('../src/storybook/index.js');
  }

configure(loadStories, module);
