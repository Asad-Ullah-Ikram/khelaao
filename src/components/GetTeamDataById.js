import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import React, {useState} from 'react';
import HomeTopCard from '../components/HomeTopCard';
import axios from 'axios';
const baseUrl = 'https://khelaao.herokuapp.com/getMatch';
import {useNavigation} from '@react-navigation/native';

// const items = [
//   {
//     title: 'LIVE',
//     event: 'Ramzan Tournamant Karachi',
//     team1: 'Gulshan',
//     team2: 'Jauhar',
//     runteam1: '140/3',
//     runteam2: '200',
//   },
//   {
//     title: 'LIVE',
//     event: 'Ramzan Tournamant Lahore',
//     team1: 'Faisal Bagh',
//     team2: 'Crown Park',
//     runteam1: '190/3',
//     runteam2: '240',
//   },
//   {
//     title: 'LIVE',
//     event: 'Ramzan Tournamant Peshawar',
//     team1: 'Wasir Bagh',
//     team2: 'Qasim Ali Khan',
//     runteam1: '190/3',
//     runteam2: '240',
//   },
// ];

const GetTeamDataById = props => {
  const {title = 'DETAILS'} = props;
  const navigation = useNavigation();
  const [data, setData] = useState([]);

  React.useEffect(() => {
    console.log(baseUrl);
    axios
      .get(`${baseUrl}`)
      .then(response => {
        setData(response.data);
        // console.log(response.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <View style={{height: '100%', flex: 1}}>
      <View
        style={{
          // marginTop: 5,
          backgroundColor: '#fff',
          paddingVertical: 15,
          paddingHorizontal: 10,
          backgroundColor: '#ff6801',
        }}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {/* { loop starts here} */}
          {data.map((data, index) => (
            <View
              key={index}
              style={{
                marginTop: 10,
                alignItems: 'center',
                marginRight: 10,
                // borderColor: 'red',
                // borderWidth: 2,
              }}>
              <Pressable
                onPress={() =>
                  navigation.navigate('ScoreCard', {
                    id: data._id,
                    name: data.name,
                    tournamentName: data.tournamentName.name,
                    teamA: data.teamA.name,
                    teamB: data.teamB.name,
                    firstBattingScore: data.firstBattingScore,
                    firstBattingFallofWickets: data.firstBattingFallOfWicket,
                    firstBowlingOver: data.firstBowlingOver,
                  })
                }>
                <HomeTopCard
                  title={data.name}
                  event={data.tournamentName.name}
                  team1={data.teamA.name}
                  team2={data.teamB.name}
                  // team2={data.teamB}
                  // team2={data.team2}
                  runteam1={data.firstBattingScore}
                  runteam2={data.firstBattingScore}
                />
              </Pressable>
            </View>
          ))}

          {/* { loop end here} */}
        </ScrollView>
      </View>
    </View>
  );
};

export default GetTeamDataById;
