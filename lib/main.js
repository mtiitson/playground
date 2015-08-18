import Logger from './Logger';
import $ from 'jquery';
//import ReactDOM from 'react-dom';
//import ReactComponent from './ReactComponent';

const logger = new Logger();
logger.log('Hello');
$.get('test.txt', r => {console.log(r)});

//ReactDOM.render(<ReactComponent/>, document.getElementById('content'));
