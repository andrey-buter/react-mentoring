import "./assets/styles.css";
import "./assets/styles.scss";
// import "./babel.js";

import React from 'react';
import {render} from 'react-dom';

class Test {
	static id = Date.now()
}

const App = () => {
	<div>Test</div>
}

render(<App />, document.getElementById('app'));