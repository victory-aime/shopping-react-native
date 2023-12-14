import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {ShopDetails, CustomHeader, CustomButton} from '../../components';
import {staticData} from '../../mock/shopDetails';

const HomeScreen = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [textSearch, setTextSearch] = useState('');
  const [filteredData, setFilteredData] = useState(staticData);
  const [resultCount, setResultCount] = useState(0);

  const handleSearch = (searchText: string) => {
    setTextSearch(searchText);

    const filteredResults = staticData.filter(
      item =>
        item.title.toLowerCase().includes(searchText.toLowerCase()) ||
        item.description.toLowerCase().includes(searchText.toLowerCase()) ||
        item.residue.toLowerCase().includes(searchText.toLowerCase()),
    );
    setFilteredData(filteredResults);
    setResultCount(filteredResults.length);
  };

  const clearSearch = () => {
    setTextSearch('');
    setFilteredData(staticData);
    setResultCount(0);
  };

  return (
    <ScrollView style={styles.container}>
      <CustomHeader onSearch={handleSearch} />
      {resultCount > 0 ? (
        <Text style={styles.resultText}> Result: {resultCount}</Text>
      ) : null}
      {filteredData.map(item => (
        <ShopDetails
          key={item.id}
          title={item.title}
          description={item.description}
          residue={item.residue}
          residueColor={item.residueColor}
          labelColor={item.labelColor}
        />
      ))}
      {resultCount > 0 ? (
        <View style={styles.clearSearch}>
          <CustomButton
            onPress={clearSearch}
            backgroundColor="#5775CD"
            textColor="white">
            Clear Search
          </CustomButton>
        </View>
      ) : null}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  resultText: {
    color: '#0B1527',
    fontSize: 18,
    marginLeft: 10,
    marginTop: 10,
    padding: 10,
  },
  clearSearch: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    padding: 10,
  },
  clearSearchText: {
    color: '#5775CD',
  },
});

export default HomeScreen;
