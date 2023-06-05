import { useState, useEffect } from 'react';
import { Ionicons } from '@expo/vector-icons';
import {
  StyleSheet,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
  Platform,
} from 'react-native';

const initialState = {
  login: '',
  email: '',
  password: '',
};

export default function RegistrationScreen() {
  const [showPassword, setShowPassword] = useState(true);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [focusedInput, setFocusedInput] = useState(null);
  const [state, setState] = useState(initialState);

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
    console.log(state);
    setState(initialState);
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
                  <TextInput
                    style={[styles.input, isInputFocused('login') && styles.inputFocus]}
                    placeholder="Логін"
                    placeholderTextColor="#BDBDBD"
                    onFocus={() => handleInputFocus('login')}
                    onBlur={handleInputBlur}
                    onChangeText={value => setState(prevState => ({ ...prevState, login: value }))}
                    value={state.login}
                  />
                </View>

                <View style={{ marginBottom: 16 }}>
                  <TextInput
                    style={[styles.input, isInputFocused('email') && styles.inputFocus]}
                    placeholder="Адреса електронної пошти"
                    placeholderTextColor="#BDBDBD"
                    onFocus={() => handleInputFocus('email')}
                    onBlur={handleInputBlur}
                    onChangeText={value => setState(prevState => ({ ...prevState, email: value }))}
                    value={state.email}
                  />
                </View>

                <View style={{ marginBottom: 43 }}>
                  <TextInput
                    style={[styles.input, isInputFocused('password') && styles.inputFocus]}
                    placeholder="Пароль"
                    placeholderTextColor="#BDBDBD"
                    secureTextEntry={showPassword}
                    onFocus={() => handleInputFocus('password')}
                    onBlur={handleInputBlur}
                    onChangeText={value =>
                      setState(prevState => ({
                        ...prevState,
                        password: value,
                      }))
                    }
                    value={state.password}
                  />
                  <TouchableOpacity
                    onPress={() => setShowPassword(!showPassword)}
                    style={styles.btnShowPassword}
                  >
                    {showPassword ? (
                      <Text style={styles.showPassword}>Показати</Text>
                    ) : (
                      <Text style={styles.showPassword}>Приховати</Text>
                    )}
                  </TouchableOpacity>
                </View>

                <TouchableOpacity
                  activeOpacity={0.8}
                  style={styles.btnRegistr}
                  onPress={onSubmitPress}
                >
                  <Text style={styles.btnText}>Зареєструватися</Text>
                </TouchableOpacity>
                <Text style={styles.text}>Вже є акаунт? Увійти</Text>
              </View>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}

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
  input: {
    paddingHorizontal: 16,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#E8E8E8',
    backgroundColor: '#F6F6F6',
    color: '#212121',
    height: 50,
    borderRadius: 8,
  },
  btnShowPassword: {
    position: 'absolute',
    right: 16,
    top: 16,
  },
  showPassword: {
    color: '#1B4371',
    fontFamily: 'Roboto-Regular',
    fontStyle: 'normal',
    fontWeight: 400,
    textAlign: 'right',
    fontSize: 16,
    lineHeight: 19,
  },
  btnRegistr: {
    marginBottom: 16,
    padding: 16,
    alignItems: 'center',
    height: 50,
    backgroundColor: '#FF6C00',
    borderRadius: 100,
  },
  btnText: {
    fontFamily: 'Roboto-Regular',
    fontWeight: 400,
    fontStyle: 'normal',
    fontSize: 16,
    lineHeight: 19,
    color: '#FFFFFF',
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
