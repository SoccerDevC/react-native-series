import { StyleSheet, View, Image, Platform } from 'react-native';
import UserTextInput from '../../components/UserTextInput'
import GetText from '@/components/ExerciseTextInput';
import LittleLemonHeader from '@/components/LittleLemonHeader';
import LittleLemonFooter from '@/components/LittleLemonFooter';

export default function TabTwoScreen() {
  return (
    <View style = {styles.outerContainer}>
      <LittleLemonHeader />
      {/* <GetText /> */}
      <UserTextInput />
      <LittleLemonFooter />
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer:{
    flex:1
  }
});
