import React, {useState} from 'react';
import {
  Dimensions,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import {Formik} from 'formik';
import {
  TextInputContainer,
  CustomButton,
  CardContainer,
} from '../../components';
import CheckBox from '@react-native-community/checkbox';
import {LoginSchema} from '../../validators';
import Toast from 'react-native-toast-message';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

const LoginScreen = ({navigation}: any) => {
  const handleLogin = (
    values: {email: any; password: any},
    {resetForm}: any,
  ) => {
    // Logique de connexion ici
    console.log('Email:', values.email);
    console.log('Password:', values.password);
    const loginSuccessful = true;

    if (loginSuccessful) {
      Toast.show({
        type: 'success',
        position: 'top',
        text1: 'Login Successful',
        visibilityTime: 3000,
      });

      resetForm();
      setTimeout(() => {
        navigation.replace('Tabs', {screen: 'HomeStack'});
      }, 2000);
    } else {
      Toast.show({
        type: 'error',
        position: 'bottom',
        text1: 'Login Failed',
        visibilityTime: 3000,
      });
    }
  };

  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  return (
    <CardContainer style={styles.container} backgroundColor="#5775CD">
      <View style={styles.headerStyle}>
        <Text style={styles.textLoginStyle}>Login</Text>
      </View>

      <KeyboardAvoidingView behavior="position">
        <CardContainer
          style={styles.transparentContainer}
          backgroundColor="none">
          <CardContainer
            style={styles.effect}
            width={SCREEN_WIDTH - 16}
            height={200}
            backgroundColor="white"></CardContainer>

          <Formik
            initialValues={{
              email: 'victory@gmail.com',
              password: '1234Victory@',
            }}
            onSubmit={handleLogin}
            validationSchema={LoginSchema}>
            {({handleChange, handleSubmit, values, errors, touched}) => (
              <View style={styles.formContainer}>
                <Text style={styles.welcomeStyle}>Welcome back! 👋 </Text>
                <Text style={styles.insideStyle}>
                  We're happy to see you again. To use your account, you should
                  log in first.
                </Text>
                <View style={styles.viewInput}>
                  <Text style={styles.textLabel}>Your e-mail </Text>
                  <TextInputContainer
                    value={values.email}
                    onChangeText={handleChange('email')}
                    placeholder="Email"
                  />
                  {touched.email && errors.email && (
                    <Text style={styles.errorText}>{errors.email}</Text>
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

                  <View style={styles.bottomStyles}>
                    <CheckBox
                      disabled={false}
                      value={toggleCheckBox}
                      onValueChange={newValue => setToggleCheckBox(newValue)}
                      tintColors={{true: '#5775CD'}}
                    />
                    <Text style={styles.rememberStyles}>Remember me</Text>
                  </View>
                  <CustomButton
                    onPress={handleSubmit}
                    textColor="#fff"
                    disabled={false}
                    textStyles={{fontSize: 18}}>
                    Login
                  </CustomButton>

                  <View style={styles.signUp}>
                    <Text
                      style={{
                        textAlign: 'center',
                      }}>
                      Don't have an account?{' '}
                    </Text>
                    <TouchableOpacity
                      onPress={() => navigation.navigate('Register')}>
                      <Text
                        style={{
                          color: '#5775CD',
                          fontWeight: '700',
                          fontSize: 14,
                        }}>
                        Sign Up
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            )}
          </Formik>

          <Toast ref={ref => Toast.setRef(ref)} />
        </CardContainer>
      </KeyboardAvoidingView>
    </CardContainer>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 150,
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
    minHeight: SCREEN_HEIGHT - 150,
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
    opacity: 0.5,
    position: 'absolute',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
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
    marginTop: 38,
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
