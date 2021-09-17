import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, ...props }) => {

    return (
        <Route>
            {
                () => {
                    if (props.loggedIn) {
                        return <Component {...props} />
                    } else {
                        props.onSigninPopupOpen();
                        return <Redirect to='/' />
                    }
                }
            }
        </Route>
    )
}

export default ProtectedRoute;