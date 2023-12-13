import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCircle} from '@fortawesome/free-solid-svg-icons';

interface NotificationDetailsProps {
  title: string;
  description: string;
  containerColor: string;
  labelColor?: string;
  showIcon?: boolean; // New prop for controlling icon visibility
}
const NotificationDetails: React.FC<NotificationDetailsProps> = ({
  title,
  description,
  containerColor,
  labelColor,
  showIcon = true,
}) => {
  return (
    <View style={[styles.container, {backgroundColor: containerColor}]}>
      <View style={styles.rowContainer}>
        {showIcon && ( // Conditionally render the icon based on the prop
          <View style={[styles.CircleContainer]}>
            <FontAwesomeIcon icon={faCircle} size={20} color={labelColor} />
          </View>
        )}
        <View style={styles.textContainer}>
          <Text style={styles.titleStyle}>{title}</Text>
        </View>
      </View>
      <View style={styles.descriptionContainer}>
        <Text style={styles.descriptionStyle}>{description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F4F8FB',
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },

  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },

  CircleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
    marginRight: 10,
    color: '#FBA13A',
  },

  textContainer: {
    flex: 1,
    marginLeft: 10,
  },

  titleStyle: {
    fontFamily: 'Inter',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'justify',
    color: '#0B1527',
  },

  descriptionContainer: {
    marginTop: 18,
    paddingBottom: 14,
  },

  descriptionStyle: {
    marginLeft: 10,
    fontFamily: 'Inter',
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'justify',
    color: '#0B1527',
  },

  divider: {
    marginTop: 15,
    borderBottomWidth: 4,
    borderBottomColor: 'white',
  },

  labelStyle: {
    marginLeft: 10,
    fontFamily: 'Inter',
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'left',
    color: '#FF004B',
  },

  valueStyle: {
    marginLeft: 10,
    fontFamily: 'Inter',
    fontSize: 16,
    fontWeight: '900',
    textAlign: 'left',
    color: '#0B1527',
  },
});

export default NotificationDetails;
