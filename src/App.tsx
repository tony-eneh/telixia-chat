import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';
import Chat from './pages/Chat/Chat';
import Chats from './pages/Chats/Chats';
import Signup from './pages/Signup/Signup';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/signup" replace />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/chats" element={<Chats />} />
        <Route path="/chats/:chatId" element={<Chat />} />
        <Route path="*" element={<Navigate to="/chats" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
