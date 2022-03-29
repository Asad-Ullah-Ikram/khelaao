import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {DataTable} from 'react-native-paper';
import {useParams} from 'react-router-dom';

const DataCell = ({
  getfirstBattingScore,
  getfirstBattingFallOfWicket,
  getfirstBowlingOver,
}) => {
  console.log(
    getfirstBowlingOver,
    getfirstBattingScore,
    getfirstBattingFallOfWicket,
  );
  return (
    <>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Runs</DataTable.Title>
          <DataTable.Title numeric>
            {getfirstBattingScore} / {getfirstBattingFallOfWicket}
          </DataTable.Title>
        </DataTable.Header>
        <DataTable.Header>
          <DataTable.Title>Overs</DataTable.Title>
          <DataTable.Title numeric>
            {getfirstBowlingOver} / 5 over
          </DataTable.Title>
        </DataTable.Header>
      </DataTable>
    </>
  );
};

export default DataCell;

const styles = StyleSheet.create({});
