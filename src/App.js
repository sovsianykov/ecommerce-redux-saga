import React from 'react';
import { Route, Switch } from 'react-router-dom'
import './default.scss'
import MainLayout  from "./layouts/MainLayout";
import HomepageLayout from "./layouts/HomepageLayout";
import Homepage from "./pages/Homepage";
import Registration from "./pages/Registration";

function App() {
  return (
    <div className='App'>
        <Switch>
            <Route path='/' exact render={() =>(
                <HomepageLayout>
                  <Homepage/>
                </HomepageLayout>
            )}/>
            <Route path='/registration'render={() =>(
                <MainLayout>
                    <Registration/>
                </MainLayout>
            )}/>
        </Switch>
    </div>
  );
}

export default App;
