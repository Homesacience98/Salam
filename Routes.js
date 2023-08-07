import { Router, Scene } from 'react-native-router-flux'
import Home from './Home.js'
import FoodList from './FoodList.js'
const Routes = () => (
 <Router>
 <Scene key = "root">
 <Scene key = "home" component = {Home} title = "Home" initial = {true} />
 <Scene key = "about" component = {FoodList} title = "About" />
 </Scene>
 </Router>
)
export default Routes