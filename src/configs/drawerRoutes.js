import { ExploreScreen } from '../screens/explore';
import MyRentScreen from '../screens/myrent/MyRentScreen';
import ProfileScreen from '../screens/profile/ProfileScreen';

const drawerRoutes = [
  {
    name: "Explore",
    component: ExploreScreen,
    icon:'search'
  },
  {
    name: "My Rent",
    component: MyRentScreen,
    icon:'shopping-bag'
  },
  {
    name: "Profile ",
    component: ProfileScreen,
    icon:'user-tie'
  },
];


export default drawerRoutes;

