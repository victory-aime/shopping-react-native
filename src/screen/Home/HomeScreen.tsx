import {StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import {ShopDetails} from '../../components';

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <ShopDetails
        title="Ashgabat, 1 Mkr, Ul.
Swaboda, Dom №16A (Beki), 271496"
        description="The Product Designer is responsible for articulating and conceptualizing our product."
        residue="-43000 TMT"
        residueColor="#0B1527"
        labelColor="#FF004B"
      />
      <ShopDetails
        title="Ashgabat, 1 Mkr, Ul.
Swaboda, Dom №16A (Beki), 271496"
        description="The Product Designer is responsible for articulating and conceptualizing our product."
        residue="0 TMT"
        residueColor="#0B1527"
        labelColor="#219653"
      />
      <ShopDetails
        title="Ashgabat, 1 Mkr, Ul.
Swaboda, Dom №16A (Beki), 271496"
        description="The Product Designer is responsible for articulating and conceptualizing our product."
        residue="0 TMT"
        residueColor="#0B1527"
        labelColor="#219653"
      />
      <ShopDetails
        title="Ashgabat, 1 Mkr, Ul.
Swaboda, Dom №16A (Beki), 271496"
        description="The Product Designer is responsible for articulating and conceptualizing our product."
        residue="-43000 TMT"
        residueColor="#0B1527"
        labelColor="#FF004B"
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

export default HomeScreen;
