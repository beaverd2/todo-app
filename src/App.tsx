import { Provider } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Wrapper from './components/Wrapper';
import Collection from './pages/Collection';
import Collections from './pages/Collections';
import { setupStore } from './redux/store';

const store = setupStore();

function App() {
  return (
    <Provider store={store}>
      <Wrapper>
        <Routes>
          <Route path='/' element={<Collections />} />
          <Route path='/:id' element={<Collection />} />
        </Routes>
      </Wrapper>
    </Provider>
  );
}

export default App;
