import React, { useState } from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';

interface GreetUserProps {
  firstName: string;
  age?: number;
}

const GreetUser: React.FC<GreetUserProps> = ({ firstName, age }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Greetings {firstName}, Age: {age}
      </Text>
    </View>
  );
};

// App called 1st time name=undefined, useState: name=Rahul
// onPress = setName(Ankush), name= Ankush
// State change detected!~!!! Call App() again
// App called 2nd time name=Ankush, from previous useState

// Props or State'
const App: React.FC<{}> = () => {
  const [counter, setCounter] = useState<number>(0); 

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Counter App</Text>

      <Text style={styles.heading}>{counter}</Text>

      <View style={{ flexDirection: 'row' }}>
        <View style={{ flex: 1, marginRight: 10 }}>
          <Button
            title="Increase"
            onPress={() => {
              setCounter(counter + 1);
            }}></Button>
        </View>
        <View style={{ flex: 1 }}>
          <Button
            title="Decrease"
            onPress={() => {
              setCounter(counter - 1);
            }}></Button>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 40,
    padding: 8,
    borderColor: 'purple',
    borderWidth: 2,
    backgroundColor:'#50DBB4',

  },
  heading: {
    margin: 10,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  paragraph: {
     margin: 10,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    padding:8
  },
});

export default App;
