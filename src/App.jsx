import React from 'react';
import './App.css';
import Navbar from './components/nav/Navbar';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/screens/Home';
import Profile from './components/screens/Profile';
import CreatePost from './components/screens/CreatePost';
import Signup from './components/screens/Signup';
import Signin from './components/screens/Signin';

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/signin">
                <Signin />
            </Route>
            <Route path="/profile">
                <Profile />
            </Route>
            <Route path="/signup">
                <Signup />
            </Route>
            <Route path="/create">
                <CreatePost />
            </Route>
        </BrowserRouter>
    );
}

export default App;
