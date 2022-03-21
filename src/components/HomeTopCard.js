import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {Card} from 'react-native-paper';

const HomeTopCard = props => {
  return (
    <View>
      <Card style={{height: 150, width: 300, padding: 8}}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            // marginHorizontal: 9,
          }}>
          <Text style={{fontWeight: '800', color: '#d02138'}}>
            {props.title}
          </Text>
          <Text style={{fontWeight: '800'}}>{props.event}</Text>
        </View>
        <View
          style={{
            marginTop: 20,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View>
            <Text style={{fontWeight: '800', fontSize: 15, color: 'black'}}>
              {props.team1}
            </Text>

            <Text style={{fontWeight: '800', fontSize: 15, color: 'black'}}>
              {props.team2}
            </Text>
          </View>
          <View>
            <Text style={{fontWeight: '800', fontSize: 15}}>
              {props.runteam1}
            </Text>
            <Text style={{fontWeight: '800', fontSize: 15}}>
              {props.runteam2}
            </Text>
          </View>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btntext}>Upcoming matches</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btntext}>Join Live Stream</Text>
          </TouchableOpacity>
        </View>
      </Card>
    </View>
  );
};

export default HomeTopCard;

const styles = StyleSheet.create({
  btn: {
    marginVertical: 14,
    borderRadius: 4,
    shadowColor: '#000',

    shadowOpacity: 0.25,
    shadowRadius: 0.84,
    elevation: 1,
  },
  btntext: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 14,
    paddingRight: 14,
    color: 'black',
    fontSize: 14,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
});
