import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';
//require('offline-plugin/runtime').install();


const render = (Component) => {
  ReactDOM.render(<Provider store={store}>
    <Component />
  </Provider>,
      document.getElementById('root')
  );
};

render(App);

if(isDev){
  module.hot.accept('./App', () => {
    render(App)
  });
}


export default App;