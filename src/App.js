import { Fragment } from 'react';
import './App.css';
import Sidebar from './components/Pages/sidebar/sideBar';
import { useStyles } from './components/styles/style';
import { BrowserRouter, Route } from 'react-router-dom';
import MainPage from './components/Pages/mainPage/mainPage';

function App() {
  const classes = useStyles();
  return (
    <Fragment>
      <BrowserRouter>
        <Sidebar></Sidebar>

        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Route exact path="/mainpage/:type" component={MainPage}></Route>
          
        </main>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
