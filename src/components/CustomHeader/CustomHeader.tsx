import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {SearchContainer} from '../../components';

interface CustomHeaderProps {
  onSearch?: (text: string) => void;
}

const CustomHeader: React.FC<CustomHeaderProps> = ({onSearch}) => {
  const [textSearch, setTextSearch] = useState('');

  const handleSearch = () => {
    if (onSearch) {
      onSearch(textSearch);
    }
  };

  return (
    <View style={styles.container}>
      <SearchContainer
        onChangeText={setTextSearch}
        value={textSearch}
        placeholder="Search..."
        onSearch={handleSearch}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 8,
    paddingTop: 20,
    backgroundColor: 'white',
    elevation: 2,
  },
});

export default CustomHeader;
