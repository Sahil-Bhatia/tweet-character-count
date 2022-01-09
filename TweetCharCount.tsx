import React, {useState} from 'react';
import {Button, Text, View, StyleSheet, Image, TextInput} from 'react-native';

const TweetCharCount: React.FC<{}> = () => {
  const defaultText: string = '';
    // 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae magnam nostrum numquam ea. Repellendus recusandae nihil facere itaque. Expedita, sint. Consequuntur qui dolorum, facere exercitationem veritatis autem nobis modi. Debitis?';
  const [textInput, setTextInput] = useState<string>(defaultText);
  const [colorValue, setColorValue] = useState<string>('gray');
  const maxChars: number = 25;
  const [charsRemaining, setCharsRemaining] = useState<number>(maxChars - textInput.length);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 5,
      padding: 8,
    },
    paragraph: {
      marginTop: 15,
      textAlign: 'center',
      marginHorizontal: 'auto',
      fontSize: 25,
    },
    text: {
      // fontWeight: 'bold',
      textAlign: 'center',
      color: colorValue,
      fontSize: 20,
    },
    inputbox: {
      height: 250,
      margin: 20,
      backgroundColor: 'white',
      borderColor: colorValue,
      // outlineStyle: 'none',
      borderWidth: 3,
      borderRadius: 10,
      padding: 5,
      fontSize: 20,
    },
    tinyLogo: {
      width: 50,
      height: 50,
      marginVertical: 5,
      marginRight: 5,
    },
  });

  const handleTextChange = (textInputValue: string) => {
    setTextInput(textInputValue);
    setCharsRemaining(maxChars - textInputValue.length);
    if (maxChars - textInputValue.length < 0) {
      setColorValue('red');
    } else if (maxChars - textInputValue.length < 10) {
      setColorValue('#F4BE2C');
    } else {
      setColorValue('gray');
    }
  };

  return (
    <View style={styles.container}>
      {/* <View style={{ flexDirection: 'row', marginHorizontal: 'auto' }}> */}
      {/* <Image
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
          style={styles.tinyLogo}
        /> */}
      <Text style={styles.paragraph}>Tweet Character count</Text>
      {/* </View> */}
      <TextInput
        multiline={true}
        // numberOfLines={4}
        onChangeText={text => handleTextChange(text)}
        value={textInput}
        style={styles.inputbox}
        editable={true}
        underlineColorAndroid="transparent"
        placeholder='Type something here'
        focusable={true}
        keyboardAppearance="light"
        keyboardType="twitter"
        
      />

      <Text style={styles.text}>{charsRemaining} characters remaining</Text>
    </View>
  );
};

export default TweetCharCount;
