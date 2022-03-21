import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const SignUp = ({navigation}) => {
  const [Email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [address, setAddress] = React.useState('');
  const [cnic, setCnic] = React.useState('');

  return (
    <View styles={styles.Container}>
      <View style={styles.logindetails}>
        <View
          style={{
            marginHorizontal: 50,
          }}>
          <Text style={styles.title}>Sign Up</Text>

          <TextInput
            style={styles.input}
            onChangeText={setEmail}
            value={Email}
            placeholder="Name"
            underlineColorAndroid="transparent"
          />
          <TextInput
            style={styles.input}
            onChangeText={setPassword}
            value={password}
            placeholder="Email"
          />
          <TextInput
            style={styles.input}
            onChangeText={setPhone}
            value={phone}
            placeholder="Phone"
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            onChangeText={setAddress}
            value={address}
            placeholder="Address"
          />
          <TextInput
            style={styles.input}
            onChangeText={setCnic}
            value={cnic}
            placeholder="Cnic"
            keyboardType="numeric"
          />

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Login')}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  logindetails: {
    justifyContent: 'center',
    alignContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 40,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    color: '#0783B6',
    marginTop: 60,
    padding: 30,
  },
  button: {
    backgroundColor: '#0783B6',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    marginHorizontal: 20,
    marginVertical: 40,
  },
  buttonText: {
    fontWeight: '900',
    color: '#fff',
    fontSize: 26,
    paddingVertical: 10,
  },
  input: {
    borderBottomWidth: 2,
    borderBottomColor: 'black',
    color: 'black',
    placeholderTextColor: '#333',
    marginLeft: 3,
    marginRight: 3,
  },
});
