import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MovieCard from './MovieCard';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<MovieCard />, document.getElementById('root'));

serviceWorker.unregister();
