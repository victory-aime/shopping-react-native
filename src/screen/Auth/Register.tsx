import React from 'react';
import {
  Dimensions,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Formik} from 'formik';

import {TextInputContainer, CustomButton} from '../../components';
import {SignUpSchema} from '../../validators';
import Toast from 'react-native-toast-message';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

const RegisterScreen = ({navigation}: any) => {
  const handleLogin = (
    values: {username: any; email: any; password: any; phoneNumber: any},
    {resetForm}: any,
  ) => {
    console.log('Email:', values.email);
    console.log('Password:', values.password);
    const loginSuccessful = false;

    if (loginSuccessful) {
      Toast.show({
        type: 'success',
        position: 'bottom',
        text1: 'Login Successful',
        visibilityTime: 3000,
      });

      resetForm();
    } else {
      Toast.show({
        type: 'error',
        position: 'bottom',
        text1: 'Login Failed',
        visibilityTime: 3000,
      });
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.container}>
        <View style={styles.headerStyle}></View>

        <View style={styles.transparentContainer}>
          <View style={styles.effect}></View>

          <KeyboardAvoidingView behavior="position">
            <Formik
              initialValues={{
                username: '',
                email: '',
                password: '',
                phoneNumber: '',
              }}
              onSubmit={handleLogin}
              validationSchema={SignUpSchema}>
              {({
                handleChange,

                handleSubmit,
                values,
                errors,
                touched,
              }) => (
                <View style={styles.formContainer}>
                  <Text style={styles.welcomeStyle}>
                    Create an new account{' '}
                  </Text>
                  <View style={styles.viewInput}>
                    <Text style={styles.textLabel}>Your username</Text>
                    <TextInputContainer
                      value={values.username}
                      onChangeText={handleChange('username')}
                      placeholder="username"
                    />
                    {touched.username && errors.username && (
                      <Text style={styles.errorText}>{errors.username}</Text>
                    )}
                    <Text style={styles.textLabel}>Your e-mail </Text>
                    <TextInputContainer
                      value={values.email}
                      onChangeText={handleChange('email')}
                      placeholder="Email"
                    />
                    {touched.email && errors.email && (
                      <Text style={styles.errorText}>{errors.email}</Text>
                    )}
                    <Text style={styles.textLabel}>Phone Number </Text>
                    <TextInputContainer
                      value={values.phoneNumber}
                      onChangeText={handleChange('phoneNumber')}
                      keyboardType="numeric"
                      placeholder="51719140"
                    />
                    {touched.phoneNumber && errors.phoneNumber && (
                      <Text style={styles.errorText}>{errors.phoneNumber}</Text>
                    )}
                    <Text style={styles.textLabel}>Enter your password</Text>
                    <TextInputContainer
                      value={values.password}
                      onChangeText={handleChange('password')}
                      secureTextEntry={true}
                      placeholder="Password"
                    />
                    {touched.password && errors.password && (
                      <Text style={styles.errorText}>{errors.password}</Text>
                    )}

                    <CustomButton
                      style={{marginTop: 30}}
                      onPress={handleSubmit}
                      textColor="#fff"
                      textStyles={{fontSize: 18}}>
                      Sign Up
                    </CustomButton>

                    <View style={styles.signUp}>
                      <Text
                        style={{
                          textAlign: 'center',
                        }}>
                        Already have an account?{' '}
                      </Text>
                      <TouchableOpacity
                        onPress={() => navigation.navigate('Login')}>
                        <Text
                          style={{
                            color: '#5775CD',
                            fontWeight: '700',
                            fontSize: 14,
                          }}>
                          Sign in
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              )}
            </Formik>
          </KeyboardAvoidingView>

          <Toast ref={ref => Toast.setRef(ref)} />
        </View>
      </View>
    </ScrollView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    backgroundColor: '#5775CD',
  },
  headerStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 50,
  },
  textLoginStyle: {
    color: '#FFF',
    textAlign: 'center',
    fontFamily: 'SF Pro Text',
    fontSize: 30,
    fontStyle: 'normal',
    fontWeight: '700',
  },
  transparentContainer: {
    minHeight: SCREEN_HEIGHT - 50,
    position: 'relative',
  },
  formContainer: {
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    backgroundColor: 'white',
    marginTop: 10,
    flex: 1,
    padding: 20,
  },
  effect: {
    backgroundColor: 'white',
    opacity: 0.5,
    position: 'absolute',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    width: SCREEN_WIDTH - 16,
    height: 200,
    right: 8,
    marginHorizontal: 'auto',
  },
  welcomeStyle: {
    color: '#0B1527',
    textAlign: 'center',
    fontFamily: 'Inter',
    fontSize: 24,
    fontStyle: 'normal',
    fontWeight: '700',
    marginTop: 20,
    marginBottom: 15,
  },
  insideStyle: {
    color: '#0B1527',
    textAlign: 'center',
    fontFamily: 'Inter',
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: '400',
    marginTop: 5,
  },

  viewInput: {
    flex: 1,
  },
  textLabel: {
    color: '#0B1527',
    textAlign: 'left',
    fontFamily: 'Inter',
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: '400',
    marginTop: 20,
  },
  bottomStyles: {
    display: 'flex',
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },

  rememberStyles: {
    color: '#0B1527',
    textAlign: 'left',
    fontFamily: 'Inter',
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: '400',
    marginLeft: 10,
  },

  errorText: {
    color: 'red',
    marginTop: 5,
  },

  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  eyeIconContainer: {
    marginLeft: -30,
  },
  signUp: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'center',
  },
});
