import {StyleSheet, ScrollView} from 'react-native';
import {NotificationDetails} from '../../components';
const Notification = () => {
  return (
    <ScrollView style={styles.container}>
      <NotificationDetails
        containerColor="#F4F8FB"
        title="№ 1456581016825"
        description="4006581016825 - 02.08.2023 / 08:30 This product is currently out of stock"
        labelColor="#FBA13A"
        showIcon={true}
      />
      <NotificationDetails
        containerColor="#F4F8FB"
        title="№ 1456581016825"
        description="4006581016825 - 02.08.2023 / 08:30 This product is currently out of stock"
        labelColor="#FBA13A"
        showIcon={true}
      />
      <NotificationDetails
        containerColor="#F4F8FB"
        title="№ 1456581016825"
        description="4006581016825 - 02.08.2023 / 08:30 This product is currently out of stock"
        showIcon={false}
      />
      <NotificationDetails
        containerColor="#F4F8FB"
        title="№ 1456581016825"
        description="4006581016825 - 02.08.2023 / 08:30 This product is currently out of stock"
        showIcon={false}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
export default Notification;
