import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { routes } from './utils'
import Header from './components/Header'
import Navigator from './components/Navigator'
import Title from './components/Title'
import Home from './routes/Home'
import Movies from './routes/Movie'
import Weather from './routes/Weather'
import './App.scss'


function App() {
  const [selectedRoute, setSelectedRoute] = useState('')
  const onRouteClickHandler = (route) => setSelectedRoute(route)
  const renderHeader = () => (
    <Header>
      <>
        <Title title="prospera test" onClick={ () => onRouteClickHandler('') } />
        <Navigator
          routes={ routes }
          variant="line"
          selectedItem={ selectedRoute }
          onItemClick={ onRouteClickHandler }
        />
      </>
    </Header>
  )

  const renderRoutes = () => (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/movies">
        <Movies />
      </Route>
      <Route path="/weather">
        <Weather />
      </Route>
    </Switch>
  )

  return (
    <div className="App">
      <Router>
        { renderHeader() }
        { renderRoutes() }
      </Router>
    </div>
  )
}

export default App
