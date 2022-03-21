import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  ImageBackground,
} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Profile = ({navigation}) => {
  return (
    <View style={styles.Container}>
      <ImageBackground
        source={require('../assets/images/bgimageprofile.jpg')}
        resizeMode="cover"
        style={styles.image}>
        <View style={{height: '60%', marginVertical: 40}}>
          <View style={styles.topContainer}>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 22,
                color: 'white',
                justifyContent: 'center',
                alignItems: 'center',
                alignSelf: 'center',
                paddingTop: 50,
                paddingLeft: 20,
              }}>
              Babar Azam
            </Text>
            <Image
              style={styles.logo}
              source={require('../assets/images/players/player1.png')}
            />
          </View>
        </View>
      </ImageBackground>
      <View style={{marginTop: -130}}>
        <View
          style={{
            height: '100%',
            backgroundColor: 'white',
            borderRadius: 50,
          }}>
          <View style={{margin: 20}}>
            <View
              style={{
                paddingVertical: 20,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around',
              }}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                }}>
                <Text style={{fontWeight: '800', fontSize: 18, color: 'black'}}>
                  Full Name
                </Text>
                <Text style={{fontWeight: '800', fontSize: 18, color: 'black'}}>
                  Age
                </Text>
                <Text style={{fontWeight: '800', fontSize: 18, color: 'black'}}>
                  Role
                </Text>
                <Text style={{fontWeight: '800', fontSize: 18, color: 'black'}}>
                  Area
                </Text>
              </View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                }}>
                <Text style={{fontWeight: '800', fontSize: 18, color: 'black'}}>
                  Babar Azam
                </Text>
                <Text style={{fontWeight: '800', fontSize: 18, color: 'black'}}>
                  27
                </Text>
                <Text style={{fontWeight: '800', fontSize: 18, color: 'black'}}>
                  Batsman
                </Text>
                <Text style={{fontWeight: '800', fontSize: 18, color: 'black'}}>
                  Karachi
                </Text>
              </View>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('Stats')}
            style={styles.btn}>
            <Text style={styles.btntext}>Check Statistics</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  topContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  logo: {
    width: 210,
    height: 280,
  },
  btn: {
    backgroundColor: '#3BA7ED',
    marginHorizontal: 90,
    // marginVertical: 60,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4.84,
    elevation: 5,
  },
  btntext: {
    padding: 10,
    fontWeight: 'bold',
    color: 'white',
    fontSize: 20,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
});
//////////////////////////////
