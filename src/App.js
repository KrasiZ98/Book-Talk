import './App.css';

import { Route, Routes } from 'react-router-dom';
import { Navigation } from './components/navigation/Navigation';
import { Home } from './components/home-page/Home';
import { Login } from './components/login-page/Login';
import { Register } from './components/register-page/Register';
import { Catalog } from './components/catalog-page/Catalog';
import { Create } from './components/create-page/Create';
import { Logout } from './components/logout/Logout';
import { Profile } from './components/profile-page/Profile';
import { Details } from './components/details-page/Details';
import { Edit } from './components/edit-page/Edit';

import AuthContextProvider from './context/AuthContext';
import RouteGards from './util/RouteGards';
import AuthGards from './util/AuthGards';
import BooksContextProvider from './context/BooksContext';
import { EditUser } from './components/edit-user/EditUser';

function App() {
  return (
    <>
      <AuthContextProvider>
        <Navigation />
        <BooksContextProvider>
          <Routes >
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<AuthGards> <Login /> </AuthGards>} />
            <Route path='/logout' element={<Logout />} />
            <Route path='/register' element={<AuthGards> <Register /> </AuthGards>} />
            <Route path='/catalog' element={<Catalog />} />
            <Route path='/create' element={<Create />} />
            <Route path='/details/:id' element={<Details />} />
            <Route path='/edit/:id' element={<Edit />} />
            <Route path='/user_edit/:id' element={<EditUser />} />
            <Route path='/profile' element={<RouteGards > <Profile /> </RouteGards>} />
          </Routes>
        </BooksContextProvider>
      </AuthContextProvider>
    </>
  );
}

export default App;
