import * as React from 'react';
import { ScrollView, Text, View, StyleSheet } from 'react-native';

export default function WelcomeScreen() {
  return (
      // <ScrollView indicatorStyle={'black'}style={welcomeStyles.scrollView}>
      <View style={welcomeStyles.view}>
        <Text
          style={welcomeStyles.upperText}>
          Welcome to Little Lemon
        </Text>
        <Text
          style={welcomeStyles.lowerText}>
          Little Lemon is a charming neighborhood bistro that serves simple food
          and classic cocktails in a lively but casual environment. We would love
          to hear more about your experience with us!
        </Text>
      {/* </ScrollView> */}
      </View>
  );
}

const welcomeStyles = StyleSheet.create({
  upperText: {
    padding: 40,
    fontSize: 38,
    color: 'white',
    textAlign: 'center',
  },
  lowerText:{
    fontSize: 27,
    padding: 20,
    marginVertical: 8,
    color: 'white',
    textAlign: 'center',
    flex:0.5
  },
  // scrollView:{ flex: 1 }
  view:{ 
    flex: 1,
    backgroundColor: '#333333'
  }
})