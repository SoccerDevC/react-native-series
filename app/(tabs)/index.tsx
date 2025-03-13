import { View, StyleSheet} from 'react-native'
import CommonHeader from '../../components/LittleLemonHeader'
import LittleLemonFooter from '../../components/LittleLemonFooter'
import Welcome from '../../components/Welcome'
import { FlatListMenuItems } from '../../components/FlatListMenuItems'
// import MenuItems from '../../components/MenuItems'
import Login from '@/components/Login'


const App = () => {
  return (
    <>
      <CommonHeader />
      {/* <Welcome /> */}
      {/* <FlatListMenuItems /> */}
      <Login />
      <LittleLemonFooter />
      
    </>
  );
}
const styles = StyleSheet.create({

  content:{
    // flex:1
  },
 
});


export default App;
