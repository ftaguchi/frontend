// preset-react permite que seja escrito HTML e CSS dentro de js
import React from 'react';
import {render} from 'react-dom';

import App from './App';

// Exibir dentro da div app o texto de H1
render(<App/>, document.getElementById('app'));