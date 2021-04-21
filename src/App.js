import React from "react"
import { Shop, Basket, ProductPage } from './pages'
import { Switch, Route } from 'react-router-dom';
import {Navbar} from './components'
import './style.css'


const App = () => {
    return(
        <>
        <Navbar/>
         <Switch>
            <Route exact path="/" component={Shop} />
            <Route path="/basket" component={Basket} />
            <Route path="/shop/:id" component={ProductPage}/>
            <Route render={() => <h1 id="notFound">Sorry...Not Found!</h1>} />
         </Switch>
        </>
    )
}


export default App;