import React from 'react'
import styled from 'styled-components'
import { Redirect, Route, Switch } from 'react-router-dom';
import Users from '../users/users';
import MoreInformation from '../moreInformation/moreInfomation';

const Main = () => {
    return (
            <Switch>
                <Route path='/'
                       render={() => <Users/>
                       }
                       exact
                />
                <Route path='/:id'
                       render={(props) => <MoreInformation {...props}/>
                       }

                />
                <Redirect to='/'/>
            </Switch>
    )
}
export default Main