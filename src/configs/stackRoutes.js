import { MyRentScreen, CartScreen, MyRentScreenHistory, DetailRentScreen } from '../screens/myrent';
import { ProfileScreen, UpdateProfileScreen } from '../screens/profile';
import { LoginScreen } from '../screens/login';
import { MainScreen } from '../screens/main';
import { SplashScreen } from '../screens/splash';
import { StartScreen } from '../screens/start';
import { SignupScreen } from '../screens/signup';
import { ForgotPwdScreen } from '../screens/forgotpwd';
import ViewAllStoreScreen from '../screens/explore/viewAllStore/ViewAllStoreScreen';
import ViewAllEqScreen from '../screens/explore/viewAllEquipment/ViewAllEqScreen';
import DetailEqScreen from '../screens/explore/viewAllEquipment/detailEquipment/DetailEqScreen';
import ViewMountScreen from '../screens/explore/viewMount/ViewMountScreen';
import DetailStoreProduct from '../screens/explore/viewAllStore/detailStore/DetailStoreProduct';
import DetailStoreCategory from '../screens/explore/viewAllStore/detailStore/DetailStoreCategory';
import { ExploreScreen, DetailStoreChoosen, DetailEqChoosen } from '../screens/explore';
import { CommonFootTab } from "../components/commonFootTab";
import { Register } from "../screens/register";

const stackRoutes = [
  // {
  //   name: 'Splash',
  //   component: SplashScreen,
  // },
  // {
  //   name: 'Start',
  //   component: StartScreen,
  // },
  // {
  //   name: "Login",
  //   component: LoginScreen,
  // },
  // {
  //   name: "Signup",
  //   component: SignupScreen,
  // },
  // {
  //   name: "Forgot",
  //   component: ForgotPwdScreen,
  // },
  // {
  //   name: "Register",
  //   component: Register,
  // },
  {
    name: "Main",
    component: CommonFootTab,
  },
  {
    name: "StoreProduct",
    component: DetailStoreProduct,
  },
  {
    name: "DetailEquipment",
    component: DetailEqScreen,
  },
  {
    name: "DetailEquipmentChoosen",
    component: DetailEqChoosen,
  },
  {
    name: "CartScreen",
    component: CartScreen,
  },
  {
    name: "MyRent",
    component: MyRentScreen,
  },
  // {
  //   name: "MyRentHistory",
  //   component: MyRentScreenHistory,
  // },
  // {
  //   name: "DetailRent",
  //   component: DetailRentScreen,
  // },
  // {
  //   name: "UpdateProfile",
  //   component: UpdateProfileScreen,
  // },
  {
    name: "ViewAllStore",
    component: ViewAllStoreScreen,
  },
  // {
  //   name: "ViewAllEquipment",
  //   component: ViewAllEqScreen,
  // },
  {
    name: "ViewMount",
    component: ViewMountScreen,
  },
  // {
  //   name: "StoreCategory",
  //   component: DetailStoreCategory,
  // },
  // {
  //   name: "StoreChoosen",
  //   component: DetailStoreChoosen,
  // },


];

export default stackRoutes;
