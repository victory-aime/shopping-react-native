import React, {useState} from 'react';
import {Text, StyleSheet} from 'react-native';
import CardContainer from '../../components/CardContainer/CardContainer';
import {RadioButton} from 'react-native-paper';
import {displayPercent} from '../../mock/displayPercent';

const DisplayPercent = () => {
  const [selectedPercent, setSelectedPercent] = useState('');

  const handleRadioButtonPress = (value: React.SetStateAction<string>) => {
    setSelectedPercent(value);
  };

  /* const handleOneByOnePress = () => {
    console.log('One by one pressed - Selected Percent:', selectedPercent);
  };

  const handleAllOfThemPress = () => {
    console.log('All of them pressed - Selected Percent:', selectedPercent);
  };
*/
  return (
    <>
      {displayPercent.map(item => (
        <CardContainer
          key={item.id}
          borderRadius={10}
          backgroundColor="#F4F8FB"
          style={styles.displayPercent}>
          <Text style={{fontSize: 14, color: '#0B1527', fontWeight: '400'}}>
            {item.percent}
          </Text>
          <RadioButton
            value={item.percent}
            status={selectedPercent === item.percent ? 'checked' : 'unchecked'}
            color="#5775CD"
            onPress={() => handleRadioButtonPress(item.percent)}
          />
        </CardContainer>
      ))}
      {/*

      <View style={styles.buttonEnd}>
        <CustomButton
          style={{marginRight: 5}}
          textColor="white"
          onPress={handleOneByOnePress}>
          One by one
        </CustomButton>
        <CustomButton textColor="white" onPress={handleAllOfThemPress}>
          All of them
        </CustomButton>
      </View>
      */}
    </>
  );
};

const styles = StyleSheet.create({
  displayPercent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 10,
    padding: 20,
  },
  buttonEnd: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 20,
  },
});

export default DisplayPercent;
