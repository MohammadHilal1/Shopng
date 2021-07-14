import React from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom'

import { connect } from 'react-redux';
import HomePage from './pages/homepage/homepage.component.jsx'
import Header from './components/header/header.component.jsx'
import ShopPage from './pages/shoppage/shoppage.component.jsx';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {auth, createUserProfileDocument} from './firebase/firebase.utils'
import {setCurrentUser} from './redux/user/user.action'
import {selectCurrentUser} from './redux/user/user.selectors'
import {createStructuredSelector} from 'reselect'
import CheckOutPage from './pages/checkoutPage/checkoutPage.component';



class App extends React.Component {

  unsubscribeFromAuth = null

  componentDidMount(){

    const {setCurrentUser} = this.props
   this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
     if(userAuth){
      const userRef = await createUserProfileDocument(userAuth) 
      
      userRef.onSnapshot(snapShot => {
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
            })
          
          console.log(this.state)
        })
        
      }
      
      setCurrentUser(userAuth)
     
      
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div>
        <Header/>
        <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/shop' component={ShopPage}/>
        <Route exact path='/signin' render={() => this.props.currentUser? (<Redirect to='/'/>): (<SignInAndSignUpPage/>)}/>
        <Route exact path='/checkout' component={CheckOutPage}/>
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
