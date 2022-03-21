import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import React from 'react';
import HomeTopCard from '../components/HomeTopCard';

const items = [
  {
    title: 'LIVE',
    event: 'Ramzan Tournamant Karachi',
    team1: 'Gulshan',
    team2: 'Jauhar',
    runteam1: '140/3',
    runteam2: '200',
  },
  {
    title: 'LIVE',
    event: 'Ramzan Tournamant Lahore',
    team1: 'Faisal Bagh',
    team2: 'Crown Park',
    runteam1: '190/3',
    runteam2: '240',
  },
  {
    title: 'LIVE',
    event: 'Ramzan Tournamant Peshawar',
    team1: 'Wasir Bagh',
    team2: 'Qasim Ali Khan',
    runteam1: '190/3',
    runteam2: '240',
  },
];

const Home = () => {
  return (
    <View style={{height: '100%'}}>
      <View
        style={{
          // marginTop: 5,
          backgroundColor: '#fff',
          paddingVertical: 15,
          paddingHorizontal: 10,
          backgroundColor: '#3BA7ED',
        }}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {/* { loop starts here} */}
          {items.map((item, index) => (
            <View
              key={index}
              style={{
                alignItems: 'center',
                marginRight: 10,
              }}>
              <HomeTopCard
                title={item.title}
                event={item.event}
                team1={item.team1}
                team2={item.team2}
                runteam1={item.runteam1}
                runteam2={item.runteam2}
              />
            </View>
          ))}

          {/* { loop end here} */}
        </ScrollView>
      </View>
    </View>
  );
};

export default Home;
