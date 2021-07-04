// importing redux and redux thunk
import thunk from 'redux-thunk';
import logger from './logger';
import { applyMiddleware } from 'redux';
// applying middleware
export default applyMiddleware(thunk, logger);
