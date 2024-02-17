import { createStore } from 'redux'; // Removemos a importação do thunk
import rootReducer from './reducers/authReducer';

const store = createStore(rootReducer);

export default store;
