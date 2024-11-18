import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './store';
import { Provider } from 'react-redux';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen.jsx';
import RegisterScreen from './screens/RegisterScreen.jsx';
import ProfileScreen from './screens/ProfileScreen.jsx';
import PrivateRoute from './components/PrivateRoute.jsx';
import TeamSubmission from './screens/TeamSubmission.jsx';
import TeamInfoScreen from './screens/TeamInfo.jsx';
import Showcase from './screens/Showcase.jsx';
import ProjectInfoScreen from './screens/ProjectInfo.jsx';
import ProjectSubmissionScreen from './screens/ProjectSubmission.jsx';
import ViewUsersAdminScreen from './admin/ViewUsersAdmin.jsx';
import BookPages from './book/BookPages.jsx';

function routeFromPage(page, parentUrl = '') {
  return (
    <>
      <Route key={page.pageUrl} path={parentUrl + page.pageUrl} element={page.pageComponent} />
      {page.pageChildren.map(c => {

       return routeFromPage(c, parentUrl + page.pageUrl)
      })}
    </>
  );
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index={true} path='/' element={<HomeScreen />} />
      <Route path='/login' element={<LoginScreen />} />
      <Route path='/register' element={<RegisterScreen />} />
      <Route path='' element={<PrivateRoute />}>
        <Route path='/profile' element={<ProfileScreen />} />
      </Route>
      <Route path='' element={<PrivateRoute />}>
        <Route path='/team-submission' element={<TeamSubmission />} />
      </Route>
      <Route path='' element={<PrivateRoute />}>
        <Route path='/project-submission' element={<ProjectSubmissionScreen />} />
      </Route>
      <Route path='' element={<PrivateRoute />}>
        <Route path='/view-users' element={<ViewUsersAdminScreen />} />
      </Route>
      <Route path='/team/:team' element={<TeamInfoScreen />} />
      <Route path='/project/:project' element={<ProjectInfoScreen />} />
      <Route path='/showcase' element={<Showcase />} />

      {BookPages.map(p => routeFromPage(p))}

    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
);
