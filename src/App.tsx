import { Provider } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Collection from './pages/Collection';
import Collections from './pages/Collections';
import { setupStore } from './redux/store';

const store = setupStore();

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path='/' element={<Collections />} />
        <Route path='/:id' element={<Collection />} />
      </Routes>
    </Provider>
  );
}

export default App;
