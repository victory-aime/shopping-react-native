import React, {useState} from 'react';
import {TextInput, View, StyleSheet, TouchableOpacity} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faSearch,
  faBell,
  faArrowLeft,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';
import {useNavigation} from '@react-navigation/native';

interface SearchProps {
  value: string;
  placeholder?: string;
  maxLength?: number;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
  onSearch: (text: string) => void;
  onChangeText: (text: string) => void;
}

const SearchContainer: React.FC<SearchProps> = ({
  value,
  placeholder,
  maxLength,
  autoCapitalize,
  onChangeText,
  onSearch,
}) => {
  const navigation = useNavigation();
  const [isInputFocused, setIsInputFocused] = useState(false);

  const handleBellPress = () => {
    // @ts-ignore
    navigation.navigate('Notification');
  };

  const handleInputFocus = () => {
    setIsInputFocused(true);
  };

  const handleInputBlur = () => {
    setIsInputFocused(false);
  };

  const handleSearch = () => {
    onSearch(value);
  };

  const handleClear = () => {
    onChangeText('');
  };

  return (
    <View style={styles.container}>
      {isInputFocused ? (
        <View style={styles.ArrowContainer}>
          <FontAwesomeIcon
            icon={faArrowLeft}
            size={20}
            color="black"
            style={styles.icon}
          />
        </View>
      ) : null}
      <View style={styles.inputContainer}>
        <FontAwesomeIcon
          icon={faSearch}
          size={20}
          color="#9094B8"
          style={styles.icon}
        />
        <TextInput
          style={styles.input}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          maxLength={maxLength}
          autoCapitalize={autoCapitalize}
          onSubmitEditing={handleSearch}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
        />
        {value.length > 0 ? (
          <TouchableOpacity onPress={handleClear}>
            <FontAwesomeIcon icon={faXmark} size={20} color="#9094B8" />
          </TouchableOpacity>
        ) : null}
      </View>
      {isInputFocused ? null : (
        <TouchableOpacity onPress={handleBellPress}>
          <View style={styles.bellContainer}>
            <FontAwesomeIcon icon={faBell} size={20} color="white" />
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    borderRadius: 10,
    backgroundColor: '#F4F8FB',
    paddingLeft: 10,
    paddingRight: 10,
  },
  input: {
    flex: 1,
  },
  icon: {
    marginLeft: 10,
    marginRight: 10,
  },
  bellContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
    borderRadius: 8,
    padding: 15,
    backgroundColor: '#5775CD',
  },
  ArrowContainer: {
    display: 'flex',
    alignSelf: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
});

export default SearchContainer;
