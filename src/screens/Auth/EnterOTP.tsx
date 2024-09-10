import React, { useEffect, useState } from 'react';
import {
  Text,
  View,
  Pressable,
  StyleSheet,
  KeyboardAvoidingView,
  SafeAreaView,
  Modal,
  Image,
} from 'react-native';
// import Fonts from '../common/assets/fonts';
// import SvgIcon from '../../assets/SvgIcon';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { THEME } from '../../styles/theme';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../../constants';

type RootStackParamList = {
    OTPScreen: undefined;
    ResetPassword: undefined;
};
  
type OTPScreenNavigationProp = StackNavigationProp<RootStackParamList, 'OTPScreen'>;

const OTPScreen: React.FC = () => {
    const navigation = useNavigation<OTPScreenNavigationProp>();
    const [isResendDisabled, setIsResendDisabled] = useState(true);
    const [timer, setTimer] = useState(60);
    const [modalVisible, setModalVisible] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const [modalError, setModalError] = useState(false);
  
    useEffect(() => {
      let interval: NodeJS.Timeout;
      if (isResendDisabled) {
        interval = setInterval(() => {
          setTimer(prevTimer => {
            if (prevTimer <= 1) {
              clearInterval(interval);
              setIsResendDisabled(false);
              return 60;
            }
            return prevTimer - 1;
          });
        }, 1000);
      }
      return () => clearInterval(interval);
    }, [isResendDisabled]);
  
    const resendOTP = () => {
      setIsResendDisabled(true);
      // Implement your resend OTP logic here
    };
  
    const handleCodeFilled = (code: string) => {
      // Implement your OTP verification logic here
      // For demo purposes, let's assume any code "1234" is successful
      if (code === '1234') {
        setModalMessage('OTP Verified Successfully!');+
        setModalError(true);
      } else {
        setModalMessage('Invalid OTP. Please try again.');
        setModalError(false);
      }
      setModalVisible(true);
    };
  
    return (
  
        <KeyboardAvoidingView style={styles.mainCon}>
            <SafeAreaView>
          <View style={{ padding: 20 }}>
            <Pressable onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back-outline" size={24} color="black" />
            </Pressable>
          </View>
          <View style={{ position: 'relative', bottom: 30 }}>
          <View style={styles.loginIcon}>
              <Image
                source={require("../../assets/otp.png")}
                style={{ width: 355, height: 300 }}
            
              />
            </View>
            <View style={styles.container}>
              <View style={styles.loginLblCon}>
                <Text style={styles.loginLbl}>Enter OTP?</Text>
              </View>
              <View style={styles.forgotDes}>
                <Text style={styles.forgotDesLbl}>
                  A 4 digit code has been sent to
                </Text>
                <Text style={styles.forgotDesLbl}>+91 1234567890</Text>
              </View>
              <View style={styles.formCon}>
                <OTPInputView
                  pinCount={4}
                  autoFocusOnLoad
                  style={{ width: '80%', height: 70 }}
                  codeInputFieldStyle={{ color: '#000' }}
                  onCodeFilled={handleCodeFilled}
                />
                <Pressable onPress={resendOTP} disabled={isResendDisabled}>
                  <Text style={styles.registerLbl}>
                    {isResendDisabled ? `Resend OTP in ${timer}s` : 'Resend OTP'}
                  </Text>
                </Pressable>
              </View>
            </View>
          </View>
     
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalView}>
            <View style={styles.loginIcon}>
                {modalError === true ? ( <Image
                source={require("../../assets/success.png")}
                style={{ width: 200, height: 200 }}
            
              />): (
                <Image
                source={require("../../assets/wrong.png")}
                style={{ width: 200, height: 200 }}
            
              />
                )}
             
            </View>
              <Text style={styles.modalText}>{modalMessage}</Text>
              {modalError === true ? (  <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.textStyle}>Đăng nhập</Text>
              </Pressable>) : (  <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.textStyle}>Thử lại</Text>
              </Pressable>) }

            
            </View>
          </View>
        </Modal></SafeAreaView>
        </KeyboardAvoidingView>
    );
  };

const styles = StyleSheet.create({
  mainCon: {
    backgroundColor: '#fff',
    flex: 1,
  },
  loginIcon: {
    alignSelf: 'center',
  },
  formCon: {
    alignItems: 'center',
  },
  container: {
    paddingHorizontal: 20,
    marginTop: 50,
  },
  loginLblCon: {
    position: 'relative',
    bottom: 40,
  },
  loginLbl: {
    color: '#000',
    fontSize: 40,
    fontFamily: THEME.FONTS.BOLD_ROBOTO,
  },
  forgotDes: {
    position: 'relative',
    bottom: 35,
  },
  forgotDesLbl: {
    color: '#000',
    fontFamily: THEME.FONTS.REGULAR,
  },
  registerLbl: {
    color: '#0057ff',
    fontFamily: THEME.FONTS.REGULAR,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 20,
    textAlign: 'center',
    fontFamily: THEME.FONTS.BOLD_ROBOTO,
  },
});

export default OTPScreen;
