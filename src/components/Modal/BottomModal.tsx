import React, {useCallback, useEffect, useMemo, useRef} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetScrollView,
} from '@gorhom/bottom-sheet';
import IconContainer from '../IconContainer/IconContainer';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faXmark} from '@fortawesome/free-solid-svg-icons';
import DisplayPercent from '../Product/DisplayPercent';

const BottomModal = ({visible, onClose}: any) => {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const snapPoints = useMemo(() => ['50%', '70%'], []);
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const handleCloseModal = useCallback(() => {
    bottomSheetModalRef.current?.dismiss();
    if (onClose) {
      onClose();
    }
  }, [onClose]);

  // useEffect to handle visibility changes
  useEffect(() => {
    if (visible) {
      handlePresentModalPress();
    } else {
      handleCloseModal();
    }
  }, [visible, handlePresentModalPress, handleCloseModal]);

  return (
    <BottomSheetModalProvider>
      <View style={styles.container}>
        <BottomSheetModal
          snapPoints={snapPoints}
          ref={bottomSheetModalRef}
          name={'resultsModal'}
          onDismiss={bottomSheetModalRef.current?.close}>
          <BottomSheetScrollView>
            <View style={styles.contentContainer}>
              <IconContainer
                marginRight={20}
                alignItems="flex-end"
                justifyContent="flex-end"
                onPress={handleCloseModal}>
                <FontAwesomeIcon icon={faXmark} size={20} color="#000" />
              </IconContainer>
              <Text style={styles.textStyles}>How much percent</Text>
              <View style={{padding: 20}}>
                <DisplayPercent />
              </View>
            </View>
          </BottomSheetScrollView>
        </BottomSheetModal>
      </View>
    </BottomSheetModalProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    backgroundColor: 'grey',
  },
  contentContainer: {
    display: 'flex',
  },
  textStyles: {
    alignSelf: 'center',
    justifyContent: 'center',
    fontFamily: 'Inter',
    fontSize: 18,
    color: '#0B1527',
    fontWeight: '700',
  },
  buttonEnd: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
});

export default BottomModal;
