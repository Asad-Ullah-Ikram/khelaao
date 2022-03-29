import React, {useRef, useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import KeyboardAvoidingView from 'react-native/Libraries/Components/Keyboard/KeyboardAvoidingView';

export function Authentication({navigation}) {
  let textInput = useRef(null);
  const [phoneNumber, setPhoneNumber] = useState();
  const [focusInput, setFocuInput] = useState(true);

  const onChangePhone = number => {
    setPhoneNumber(number);
  };

  const onPressContinue = () => {
    if (phoneNumber) {
      navigation.navigate('otp', {
        phoneNumber: phoneNumber,
      });
    }
  };

  const onChangeFocus = () => {
    setFocuInput(true);
  };

  const onChangeBlur = () => {
    setFocuInput(false);
  };

  useEffect(() => {
    textInput.focus();
  }, []);

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        keyboardVerticalOffset={50}
        behaviour={'padding'}
        style={styles.containerAvoidingView}>
        <Text style={styles.textTitle}>
          {'Please Input You Mobile Phone Number'}
        </Text>
        <View
          style={[
            styles.containerInput,
            {
              borderBottomColor: focusInput ? '#244DB7' : '#ffffff',
            },
          ]}>
          <View style={styles.openDialogView}>
            <Text>{'+92 |'}</Text>
          </View>
          <TextInput
            ref={input => (textInput = input)}
            style={styles.phoneInputStyle}
            placeholder="Enter Mobile Number"
            keyboardType="numeric"
            value={phoneNumber}
            onChangeText={onChangePhone}
            secureTextEntry={false}
            onFocus={onChangeFocus}
            onBlur={onChangeBlur}
            autoFocus={focusInput}
          />
        </View>
        <View style={styles.viewBottom}>
          <TouchableOpacity onPress={onPressContinue}>
            <View
              style={[
                styles.btnContinue,
                {
                  backgroundColor: phoneNumber ? '#384E78' : 'gray',
                },
              ]}>
              <Text style={styles.textContinue}>Continue</Text>
            </View>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerAvoidingView: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },
  textTitle: {
    marginBottom: 50,
    marginTop: 50,
    fontSize: 16,
    // color: '#000',
  },
  containerInput: {
    flexDirection: 'row',
    paddingHorizontal: 12,
    borderRadius: 10,
    backgroundColor: 'white',
    alignItems: 'center',
    borderBottomWidth: 1.5,
  },
  openDialogView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  phoneInputStyle: {
    marginLeft: 5,
    flex: 1,
    height: 50,
  },
  viewBottom: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 50,
    alignItems: 'center',
  },
  btnContinue: {
    width: 150,
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContinue: {
    color: '#ffffff',
    alignItems: 'center',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
