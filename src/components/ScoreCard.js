// import { NavigationContainer } from "@react-navigation/native";
import axios from 'axios';
import React, {useState} from 'react';
import {ImageBackground, StyleSheet, Text, View, Button} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import DataCell from '../components/DataCell';
// import { useParams } from 'react-router-dom';
import {Card} from 'react-native-paper';

const ScoreCard = ({route, navigation}) => {
  let getid = route.params.id;
  let getname = route.params.name;
  let gettournamentName = route.params.tournamentName;
  let getteamA = route.params.teamA;
  let getteamB = route.params.teamB;
  let getfirstBattingScore = route.params.firstBattingScore;
  let getfirstBattingFallOfWicket = route.params.firstBattingFallofWickets;
  let getfirstBowlingOver = route.params.firstBowlingOver;

  const [user, setUser] = useState('');

  return (
    <View style={styles.container}>
      {/* ////////////////////////////////   top card /////////////////////////////////////////////// */}
      <View style={{margin: 10}}>
        <Card style={{height: 150, padding: 8}}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              // marginHorizontal: 9,
            }}>
            <Text style={{fontWeight: '800', color: '#d02138'}}>{getname}</Text>
            <Text style={{fontWeight: '800'}}>{gettournamentName}</Text>
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
                {getteamA}
              </Text>

              <Text style={{fontWeight: '800', fontSize: 15, color: 'black'}}>
                {getteamB}
              </Text>
            </View>
            <View>
              <Text style={{fontWeight: '800', fontSize: 15}}>
                {getfirstBattingScore} / {getfirstBattingFallOfWicket}
              </Text>
              <Text style={{fontWeight: '800', fontSize: 15}}>run team 2</Text>
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
      {/* ///////////////////////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////   team A /////////////////////////////////////////////// */}
      <View style={{margin: 10}}>
        <Card style={{height: 150, padding: 8}}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingVertical: 9,
              paddingHorizontal: 9,
              backgroundColor: 'black',
            }}>
            <Text style={{fontWeight: '800', color: 'white'}}> {getteamA}</Text>
            <Text style={{fontWeight: '800', color: 'white'}}>
              {gettournamentName}
            </Text>
          </View>
          <View
            style={{
              // marginTop: 20,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <DataCell
              getfirstBattingScore={getfirstBattingScore}
              getfirstBattingFallOfWicket={getfirstBattingFallOfWicket}
              getfirstBowlingOver={getfirstBowlingOver}
            />
          </View>
        </Card>
      </View>
      {/* ///////////////////////////////////////////////////////////////////////////////////// */}

      {/* ///////////////////////////////////////////////////////////////////////////////////// */}

      {/* <Text style={styles.text}>{getid}</Text>
      <Text style={styles.text}> {getname}</Text>
      <Text style={styles.text}> {gettournamentName}</Text>
      <Text style={styles.text}> {getteamA}</Text>
      <Text style={styles.text}>{getteamB}</Text>
      <Text style={styles.text}>{getfirstBattingScore}</Text> */}
      {/* <Text style={styles.textpara}>{getteamB}</Text>
      <Text style={styles.textpara}>{getteamB}</Text> */}
    </View>
  );
};

export default ScoreCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  text: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
  textpara: {
    justifyContent: 'center',
    fontSize: 18,
    textAlign: 'center',
    color: 'white',
    paddingBottom: 30,
    backgroundColor: '#f24679',
    fontWeight: 'bold',
    paddingTop: 12,
  },
  next: {
    paddingRight: 80,
    paddingLeft: 80,
    padding: 20,
  },
  btntext: {
    paddingRight: 20,
    paddingLeft: 47,
    padding: 5,
    fontWeight: 'bold',
    fontSize: 30,
    backgroundColor: '#7e34a3',
    color: 'white',
    marginLeft: 20,
    marginRight: 20,
  },
  previous: {
    paddingRight: 190,
    paddingLeft: 10,
    fontWeight: 'bold',
    fontSize: 30,
    color: 'white',
    marginRight: 60,
    paddingBottom: 37,
  },
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
