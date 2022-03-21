import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
const baseUrl = 'https://backendlive.herokuapp.com/khelaao';
import axios from 'axios';
import {ScrollView} from 'react-native-gesture-handler';
import StatsCard from '../components/StatsCard';

const Stats = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
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
    <View style={[styles.container]}>
      <ScrollView>
        <Image
          style={styles.image1}
          source={require('../assets/images/image1.png')}
        />
        <View style={{backgroundColor: 'white', flex: 1}}>
          {data.map(data => (
            <View>
              <StatsCard
                name={data.name}
                match={data.match}
                innigs={data.innigs}
                run={data.run}
                wicket={data.wicket}
                bestScore={data.bestScore}
                avgRate={data.avgRate}
                strikeRate={data.strikeRate}
                bestBowl={data.bestBowl}
              />
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image1: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    width: 360,
    height: 190,
  },
});

export default Stats;
