import React, {useState} from 'react';
import {
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Text,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  ImageBackground,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

const Profile = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <View style={{marginBottom: 30}}>
            <View style={styles.div1}>
              <View style={styles.div2}>
                <Text style={styles.txt1}>Bisham Khan</Text>
                <Text style={styles.txt2}>Karachi Kings</Text>
              </View>

              <View style={styles.div3}>
                <Image
                  style={styles.img1}
                  source={require('../assets/images/players/player1.png')}
                />
              </View>
            </View>

            {/* <View style={styles.maindiv1}>
            <TouchableOpacity style={styles.subdiv1}>
              <Text style={styles.subtxt1}>Profile</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.subdiv1}>
              <Text style={styles.subtxt1}>Stats</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.subdiv1}>
              <Text style={styles.subtxt1}>Team</Text>
            </TouchableOpacity>
          </View> */}
            {/* <ScrollView> */}
            <View style={styles.maindiv2}>
              <View style={styles.subdiv2}>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                  }}>
                  <Text style={styles.subtxt2}>Role : </Text>
                  <Text style={styles.subtxt3}>Batsman</Text>
                </View>
              </View>
              <View style={styles.subdiv2}>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                  }}>
                  <Text style={styles.subtxt2}>Bats : </Text>
                  <Text style={styles.subtxt3}>Right Hand Batsman</Text>
                </View>
              </View>
              <View style={styles.subdiv2}>
                <View style={{display: 'flex', flexDirection: 'row'}}>
                  <Text style={styles.subtxt2}>Bowl :</Text>
                  <Text style={styles.subtxt3}>Right arm offspin bowler</Text>
                </View>
              </View>
            </View>

            <View style={styles.maindiv3}>
              <View style={styles.subdiv3}>
                <View style={{display: 'flex', flexDirection: 'row'}}>
                  <Text style={styles.subtxt2}>Name : </Text>
                  <Text style={styles.subtxt3second}>Bisham Khan</Text>
                </View>
              </View>
              <View style={styles.subdiv3}>
                <View style={{display: 'flex', flexDirection: 'row'}}>
                  <Text style={styles.subtxt2}>Birth : </Text>
                  <Text style={styles.subtxt3second}> 23 Oct 2001</Text>
                </View>
              </View>
              <View style={styles.subdiv3}>
                <View style={{display: 'flex', flexDirection: 'row'}}>
                  <Text style={styles.subtxt2}>Area: </Text>
                  <Text style={styles.subtxt3second}>Gulshan-e-Iqbal </Text>
                </View>
              </View>
              <View style={styles.subdiv3}>
                <View style={{display: 'flex', flexDirection: 'row'}}>
                  <Text style={styles.subtxt2}>Age :</Text>
                  <Text style={styles.subtxt3second}> 20 </Text>
                </View>
              </View>
              <View style={styles.subdiv3}>
                <View style={{display: 'flex', flexDirection: 'row'}}>
                  <Text style={styles.subtxt2}>Location:</Text>
                  <Text style={styles.subtxt3second}>Karachi</Text>
                </View>
              </View>
              <View style={styles.subdiv3}>
                <View style={{display: 'flex', flexDirection: 'row'}}>
                  <Text style={styles.subtxt2}>Nationality:</Text>
                  <Text style={styles.subtxt3second}>Pakistan</Text>
                </View>
              </View>
            </View>
            {/* </ScrollView> */}
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  div1: {
    backgroundColor: '#3BA7ED',
    borderBottomRightRadius: 60,
    borderBottomLeftRadius: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  div2: {
    marginLeft: 20,
    marginTop: 100,
  },
  txt1: {
    color: 'white',
    fontSize: 26,
    fontWeight: 'bold',
  },
  txt2: {
    color: 'white',
    fontSize: 18,
  },
  div3: {
    marginRight: 20,
    // marginTop: 40,
  },
  img1: {
    width: 180,
    height: 220,
  },
  maindiv1: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 10,
  },
  subdiv1: {
    backgroundColor: '#BCBEC0',
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 20,
  },
  subtxt1: {
    fontSize: 20,
  },
  maindiv2: {
    backgroundColor: '#3BA7ED',
    marginTop: 20,
    marginRight: 20,
    marginLeft: 20,
    borderRadius: 10,
  },
  subdiv2: {
    paddingBottom: 10,
    // flexDirection: 'row',
    borderBottomWidth: 0.7,
    marginBottom: 10,
    marginTop: 10,
    borderBottomColor: '#BCBEC0',
    // marginRight: 10,
  },
  subtxt2: {
    color: 'white',
    marginLeft: 20,
    fontSize: 16,
  },
  subtxt3: {
    color: 'white',
    marginLeft: 10,
    fontSize: 16,
  },
  maindiv3: {
    backgroundColor: '#3BA7ED',
    marginTop: 20,
    marginRight: 20,
    marginLeft: 20,
    borderRadius: 10,
  },
  subdiv3: {
    paddingBottom: 10,
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: 0.7,
    borderBottomColor: '#BCBEC0',
  },

  subtxt3second: {
    color: 'white',
    // marginLeft: 10,
    fontSize: 16,
    paddingLeft: 10,
  },
});
