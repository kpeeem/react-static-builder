import { createStore } from 'redux';

const reducer = (state = 0, action) => {
    switch (action.type) {
        case 'CHANGE_BACKGROUND':
            console.log(action)
            return 'CHANGE_BACKGROUND';
    }
    return state;
};

export default createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
