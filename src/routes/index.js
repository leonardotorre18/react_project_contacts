import { Routes as Switch, Route} from 'react-router-dom';
import HomePages from '../pages/HomePages';

export default function Routes() {
  return (
    <Switch>
    <Route path="/" element={ <HomePages></HomePages> }></Route>
    {/* <Route path="/about">
      <About />
    </Route>
    <Route path="/users">
      <Users />
    </Route> */}
  </Switch>
  )
}
