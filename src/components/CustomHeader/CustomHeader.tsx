import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {SearchContainer} from '../../components';

const CustomHeader = () => {
  const [textSearch, setTextSearch] = useState('bonsoir');

  return (
    <View style={styles.container}>
      <SearchContainer
        onChangeText={setTextSearch}
        value={textSearch}
        placeholder="Search..."
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    gap: 16,
    paddingHorizontal: 20,
    paddingVertical: 8,
    paddingTop: 20,
    backgroundColor: 'white',
    elevation: 2,
  },
});

export default CustomHeader;
