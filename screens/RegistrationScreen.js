import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import {
  StyleSheet,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  Text,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
  Platform,
} from 'react-native';

import EmailInput from '../components/emailInput';
import PasswordInput from '../components/passwordInput';
import FormButton from '../components/formButton';
import LoginInput from '../components/loginInput';

const RegistrationScreen = ({ navigation }) => {
  const [showPassword, setShowPassword] = useState(true);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [focusedInput, setFocusedInput] = useState(null);
  const [login, setLogin] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  const handleInputFocus = inputName => {
    setIsShowKeyboard(true);
    setFocusedInput(inputName);
  };

  const handleInputBlur = () => {
    setIsShowKeyboard(false);
    setFocusedInput(null);
  };

  const isInputFocused = inputName => focusedInput === inputName;

  const onSubmitPress = () => {
    console.log(login, email, password);
    navigation.navigate('Home');
    setLogin('');
    setEmail('');
    setPassword('');
  };

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}>
        <ImageBackground style={styles.image} source={require('../assets/images/bg-image.jpg')}>
          <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <View style={styles.box}>
              <View style={styles.avatarBox}>
                <Image
                  style={styles.avatar}
                  source={require('../assets/images/avatar.jpg')}
                ></Image>
                <TouchableOpacity style={styles.addAvatar} activeOpacity={0.9}>
                  <Ionicons name="add" size={20} color={'#FF6C00'} />
                </TouchableOpacity>
              </View>

              <Text style={styles.title}>Реєстрація</Text>

              <View
                style={{
                  ...styles.form,
                  marginBottom: isShowKeyboard ? -100 : 78,
                }}
              >
                <View style={{ marginBottom: 16 }}>
                  <LoginInput
                    placeholder="Логін"
                    placeholderTextColor="#BDBDBD"
                    onFocus={() => handleInputFocus('login')}
                    onBlur={handleInputBlur}
                    onChangeText={value => setLogin(value)}
                    value={login}
                    isInputFocused={isInputFocused('login')}
                  />
                </View>

                <View style={{ marginBottom: 16 }}>
                  <EmailInput
                    placeholder="Адреса електронної пошти"
                    placeholderTextColor="#BDBDBD"
                    onFocus={() => handleInputFocus('email')}
                    onBlur={handleInputBlur}
                    onChangeText={value => setEmail(value)}
                    value={email}
                    isInputFocused={isInputFocused('email')}
                  />
                </View>

                <View style={{ marginBottom: 43 }}>
                  <PasswordInput
                    placeholder="Пароль"
                    placeholderTextColor="#BDBDBD"
                    onFocus={() => handleInputFocus('password')}
                    onBlur={handleInputBlur}
                    onChangeText={value => setPassword(value)}
                    value={password}
                    isInputFocused={isInputFocused('password')}
                    passwordShow={showPassword}
                    onTogglePasswordShow={() => setShowPassword(!showPassword)}
                  />
                </View>
                <FormButton title="Зареєстуватися" onPress={onSubmitPress} />
                <Text style={styles.text} onPress={() => navigation.navigate('Login')}>
                  Вже є акаунт? Увійти
                </Text>
              </View>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};
export default RegistrationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
  },
  box: {
    position: 'relative',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    marginTop: 'auto',
    paddingTop: 92,
    backgroundColor: '#FFFFFF',
  },
  avatarBox: {
    position: 'absolute',
    backgroundColor: '#F6F6F6',
    borderRadius: 16,
    top: -60,
    alignSelf: 'center',
    marginHorizontal: 'auto',
    width: 120,
    height: 120,
  },
  avatar: {
    borderRadius: 16,
  },
  addAvatar: {
    position: 'absolute',
    bottom: 14,
    right: -12.5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 50,
    borderWidth: 1,
    width: 25,
    height: 25,
    borderStyle: 'solid',
    borderColor: '#FF6C00',
  },
  title: {
    marginBottom: 32,
    fontFamily: 'Roboto-Medium',
    fontStyle: 'normal',
    fontSize: 30,
    lineHeight: 35,
    textAlign: 'center',
    letterSpacing: 0.01,
    color: '#212121',
  },
  form: {
    marginHorizontal: 16,
  },
  text: {
    fontFamily: 'Roboto-Regular',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
    textAlign: 'center',
    color: '#1B4371',
  },
});
