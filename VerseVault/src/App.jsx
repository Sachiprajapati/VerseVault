import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Poems from './pages/Poems';
import Submit from './pages/Submit';
import About from './pages/About';
import Login from './pages/Login';
import Signup from './pages/Signup';
import MyPoems from './pages/MyPoems';
import MyProfile from './pages/MyProfile';
import AdminPage from './pages/AdminPage';

function App() {
  return (
    <>
      <Navbar />
      <div style={{ padding: '2rem' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/poems" element={<Poems />} />
          <Route path="/submit" element={<Submit />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<MyProfile />} />
          <Route path="/my-poems" element={<MyPoems />} />
          <Route path="/admin" element={<AdminPage />} />

        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
