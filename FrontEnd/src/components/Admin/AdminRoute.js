import React from 'react'
import { Route,withRouter,Redirect } from 'react-router-dom'
import { isAuthenticate ,isAdmin} from '../user/api/userApi'

const AdminRoute =({component:Component ,...rest})=>  (
        <Route 
           {...rest}
           render={(props) => isAuthenticate() && isAdmin() ? <Component {...props}/>  }
        />
    )



    // const ProtectedRoute = ({ component: Component, ...rest }) => (
    //     <Route {...rest} render={(props) => (
    //        fakeAuthCentralState.isAuthenticated === true ? 
    //           <Component {...props} /> : <Redirect to={{ pathname: '/login', state: { from: props.location }}} />   
    //     )} />
    //  );
export default  AdminRoute