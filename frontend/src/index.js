import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/common/HomePage';
// ...other imports

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* Add other routes */}
    </Routes>
  );
}

export default App;