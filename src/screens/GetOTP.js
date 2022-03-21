import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import KeyboardAvoidingView from 'react-native/Libraries/Components/Keyboard/KeyboardAvoidingView';

export function GetOTP({navigation}) {
  let textInput = useRef(null);

  const lengthInput = 4;
  const [internalVal, setInternalVal] = useState('');

  /////////   counter    ///////////////////////
  const DefaultCountdown = 30;
  let clockCall = null;
  const [countdown, setCountdown] = useState(DefaultCountdown);
  const [enableResend, setEnableResend] = useState(false);

  useEffect(() => {
    clockCall = setInterval(() => {
      decrementClock();
    }, 1000);
    return () => {
      clearInterval(clockCall);
    };
  });

  const decrementClock = () => {
    if (countdown === 0) {
      setEnableResend(true);
      setCountdown(0);
      clearInterval(clockCall);
    } else {
      setCountdown(countdown - 1);
    }
  };

  /////////   counter    ///////////////////////

  const onChangeText = val => {
    setInternalVal(val);
    if (val.length === lengthInput) {
      navigation.navigate('Verification');
    }
  };

  const onResendOTP = () => {
    if (enableResend) {
      setCountdown(DefaultCountdown);
      setEnableResend(false);
      clearInterval(clockCall);
      clockCall = setInterval(() => {
        decrementClock(0);
      }, 1000);
    }
  };

  const onChangeNumber = () => {
    setInternalVal('');
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
          {'Input Your OTP code sent via SMS'}
        </Text>

        <View>
          <TextInput
            ref={input => (textInput = input)}
            onChangeText={onChangeText}
            style={{width: 0, height: 0}}
            value={internalVal}
            maxLength={lengthInput}
            returnKeyType="done"
            keyboardType="numeric"
          />
          <View style={styles.containerInput}>
            {Array(lengthInput)
              .fill()
              .map((data, index) => (
                <View
                  key={index}
                  style={[
                    styles.cellview,
                    {
                      borderBottomColor:
                        index === internalVal.length ? '#FB6C6A' : '#234DB7',
                    },
                  ]}>
                  <Text
                    style={styles.cellText}
                    onPress={() => textInput.focus()}>
                    {internalVal && internalVal.length > 0
                      ? internalVal[index]
                      : ''}
                  </Text>
                </View>
              ))}
          </View>
        </View>

        <View style={styles.bottomview}>
          <TouchableOpacity>
            <View style={styles.bottonChangeNumber}>
              <Text
                style={styles.textChange}
                onPress={() => navigation.navigate('authentication')}>
                Change Number
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={onResendOTP}>
            <View style={styles.bottonResend}>
              <Text
                style={[
                  styles.textResend,
                  {
                    color: enableResend ? '#234DB7' : 'gray',
                  },
                ]}>
                Resend OTP ({countdown})
              </Text>
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
    alignContent: 'center',
    justifyContent: 'center',
  },
  cellview: {
    paddingVertical: 11,
    width: 40,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1.5,
  },
  cellText: {
    textAlign: 'center',
    fontSize: 16,
  },
  bottomview: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 50,
    alignItems: 'flex-end',
  },
  bottonChangeNumber: {
    width: 150,
    height: 50,
    borderRadius: 10,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  textChange: {
    color: '#234DB7',
    alignItems: 'center',
    fontSize: 15,
  },
  bottonResend: {
    width: 150,
    height: 50,
    borderRadius: 10,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  textResend: {
    alignItems: 'center',
    fontSize: 15,
  },
});
