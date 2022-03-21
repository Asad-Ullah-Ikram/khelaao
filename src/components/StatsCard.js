import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Card} from 'react-native-paper';
import {ScrollView} from 'react-native-gesture-handler';

const StatsCard = props => {
  return (
    <View style={{marginTop: 10, marginHorizontal: 5}}>
      {/* <ScrollView showsVerticalScrollIndicator={false}> */}
      {/* /////////////////////////////////////////////////////////// */}
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
        <Card
          style={{
            backgroundColor: '#3BA7ED',
            marginVertical: 10,
            width: '46%',
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 4.84,
            elevation: 5,
          }}>
          <Card.Content style={{borderRadius: 20}}>
            <Text style={{color: 'white', textAlign: 'center'}}>Name</Text>
            <Text
              style={{
                color: 'white',
                fontWeight: 'bold',
                fontSize: 24,
                textAlign: 'center',
              }}>
              {props.name}
            </Text>
          </Card.Content>
        </Card>
        {/* /////////// */}
        <Card
          style={{
            backgroundColor: '#3BA7ED',
            marginVertical: 10,
            width: '46%',
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 4.84,

            elevation: 5,
          }}>
          <Card.Content style={{borderRadius: 20}}>
            <Text style={{color: 'white', textAlign: 'center'}}>Matches</Text>
            <Text
              style={{
                color: 'white',
                fontWeight: 'bold',
                fontSize: 24,
                textAlign: 'center',
              }}>
              {props.match}
            </Text>
          </Card.Content>
        </Card>
      </View>
      {/* /////////////////////////////////////////////////////////// */}
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
        <Card
          style={{
            backgroundColor: '#3BA7ED',
            marginVertical: 10,
            width: '46%',
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 4.84,

            elevation: 5,
          }}>
          <Card.Content style={{borderRadius: 20}}>
            <Text style={{color: 'white', textAlign: 'center'}}>Innings</Text>
            <Text
              style={{
                color: 'white',
                fontWeight: 'bold',
                fontSize: 24,
                textAlign: 'center',
              }}>
              {props.innigs}
            </Text>
          </Card.Content>
        </Card>

        {/* ////////////////// */}
        <Card
          style={{
            backgroundColor: '#3BA7ED',
            marginVertical: 10,
            width: '46%',
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 4.84,

            elevation: 5,
          }}>
          <Card.Content style={{borderRadius: 20}}>
            <Text style={{color: 'white', textAlign: 'center'}}>Runs</Text>
            <Text
              style={{
                color: 'white',
                fontWeight: 'bold',
                fontSize: 24,
                textAlign: 'center',
              }}>
              {props.run}
            </Text>
          </Card.Content>
        </Card>
      </View>
      {/* /////////////////////////////////////////////////////////// */}
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
        <Card
          style={{
            backgroundColor: '#3BA7ED',
            marginVertical: 10,
            width: '46%',
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 4.84,

            elevation: 5,
          }}>
          <Card.Content style={{borderRadius: 20}}>
            <Text style={{color: 'white', textAlign: 'center'}}>Wickets</Text>
            <Text
              style={{
                color: 'white',
                fontWeight: 'bold',
                fontSize: 24,
                textAlign: 'center',
              }}>
              {props.wicket}
            </Text>
          </Card.Content>
        </Card>
        {/* ///////////////// */}
        <Card
          style={{
            backgroundColor: '#3BA7ED',
            marginVertical: 10,
            width: '46%',
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 4.84,

            elevation: 5,
          }}>
          <Card.Content style={{borderRadius: 20}}>
            <Text style={{color: 'white', textAlign: 'center'}}>
              Best Score
            </Text>
            <Text
              style={{
                color: 'white',
                fontWeight: 'bold',
                fontSize: 24,
                textAlign: 'center',
              }}>
              {props.bestScore}
            </Text>
          </Card.Content>
        </Card>
      </View>
      {/* /////////////////////////////////////////////////////////// */}
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
        <Card
          style={{
            backgroundColor: '#3BA7ED',
            marginVertical: 10,
            width: '46%',
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 4.84,

            elevation: 5,
          }}>
          <Card.Content style={{borderRadius: 20}}>
            <Text style={{color: 'white', textAlign: 'center'}}>
              Average Rate
            </Text>
            <Text
              style={{
                color: 'white',
                fontWeight: 'bold',
                fontSize: 24,
                textAlign: 'center',
              }}>
              {props.avgRate}
            </Text>
          </Card.Content>
        </Card>
        {/* ////////////////// */}
        <Card
          style={{
            backgroundColor: '#3BA7ED',
            marginVertical: 10,
            width: '46%',
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 4.84,

            elevation: 5,
          }}>
          <Card.Content style={{borderRadius: 20}}>
            <Text style={{color: 'white', textAlign: 'center'}}>
              Strike Rate
            </Text>
            <Text
              style={{
                color: 'white',
                fontWeight: 'bold',
                fontSize: 24,
                textAlign: 'center',
              }}>
              {props.strikeRate}
            </Text>
          </Card.Content>
        </Card>
      </View>
      {/* /////////////////////////////////////////////////////////// */}
      <Card
        style={{
          backgroundColor: '#3BA7ED',
          marginVertical: 10,
          width: '80%',
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 4.84,

          elevation: 5,
        }}>
        <Card.Content style={{borderRadius: 20}}>
          <Text style={{color: 'white', textAlign: 'center'}}>Best Bowl</Text>
          <Text
            style={{
              color: 'white',
              fontWeight: 'bold',
              fontSize: 24,
              textAlign: 'center',
            }}>
            {props.bestBowl}
          </Text>
        </Card.Content>
      </Card>
      {/* /////////////////////////////////////////////////////////// */}
      {/* </ScrollView> */}
    </View>
  );
};

export default StatsCard;

const styles = StyleSheet.create({});
