import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const Login = ({navigation}) => {
  const [Email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <View styles={styles.Container}>
      <View style={styles.logindetails}>
        <View
          style={{
            marginVertical: 50,
            marginHorizontal: 50,
          }}>
          <Text style={styles.title}>Login</Text>

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
            placeholder="Password"
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Signup')}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Login;

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
    marginLeft: 7,
    marginRight: 3,
  },
});
