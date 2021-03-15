import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom';
import Users from '../users/users';
import Information from '../information/infomation';

const Main = () => {
    return (
            <Switch>
                <Route path='/'
                       render={() => <Users/>
                       }
                       exact
                />
                <Route path='/:id'
                       render={(props) => <Information {...props}/>
                       }
                />
                <Redirect to='/'/>
            </Switch>
    )
}
export default Main