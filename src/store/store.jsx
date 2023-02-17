import {applyMiddleware, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from "../services/reducers/rootReducer";
import wsOrdersFeeds from "../middleware/wsOrdersFeeds";

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk, wsOrdersFeeds(),)));
