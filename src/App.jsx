import { BrowserRouter } from 'react-router-dom';
import Elements from './pages/router';
import { GlobalStyle } from './styles/GlobalStyle';

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Elements />
    </BrowserRouter>
  );
};

export default App;
