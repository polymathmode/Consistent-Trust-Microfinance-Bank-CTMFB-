

import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const LoginPage = ({ navigation }) => {
  // State to manage phone number input
  const [phoneNumber, setPhoneNumber] = useState('');

  // State to manage password input
  const [password, setPassword] = useState('');

  // State to manage error messages
  const [error, setError] = useState('');

  // State to manage secure text entry (password visibility)
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  // Function to handle login button press
  const handleLogin = () => {
    if (!password) {
      setError('Password is required');
      return;
    }
    setError('');
    // On successful login, navigate to Dashboard
    navigation.navigate('Dashboard');
  };

  return (
    <View style={styles.container}>
      {/* Cancel button */}
      <TouchableOpacity style={styles.cancelButton}>
        <Text style={styles.cancelText}>Cancel</Text>
      </TouchableOpacity>

      {/* Page title */}
      <Text style={styles.title}>Login to your account</Text>

      {/* Page subtitle */}
      <Text style={styles.subtitle}>We are glad to have you, kindly enter your login details.</Text>
      
      {/* Phone number input */}
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Phone Number*</Text>
        <TextInput
          style={styles.input}
          placeholder="+234 809 531 6411"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          keyboardType="phone-pad"
        />
      </View>

      {/* Password input */}
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Your Password</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.input}
            placeholder="********"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={secureTextEntry}
          />
          {/* Toggle password visibility */}
          <TouchableOpacity onPress={() => setSecureTextEntry(!secureTextEntry)} style={styles.eyeIcon}>
            <Icon name={secureTextEntry ? "eye-off-outline" : "eye-outline"} size={24} color="grey" />
          </TouchableOpacity>
        </View>
      </View>
      {/* Display error message */}
      {error ? <Text style={styles.errorText}>{error}</Text> : null}

      {/* Login button */}
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>

      {/* Sign up link */}
      <TouchableOpacity>
        <Text style={styles.signupText}>Don’t have an account? Sign up</Text>
      </TouchableOpacity>

      {/* Forgot password link */}
      <TouchableOpacity>
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
      </TouchableOpacity>

      {/* Fingerprint login option */}
      <TouchableOpacity style={styles.fingerprintContainer}>
        <Icon name="finger-print-outline" size={48} color="green" />
      </TouchableOpacity>

      {/* App version text */}
      <Text style={styles.versionText}>v1.1.1</Text>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  cancelButton: {
    alignSelf: 'flex-start',
    marginTop: 20,
  },
  cancelText: {
    color: 'green',
    fontSize: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'green',
    marginTop: 20,
  },
  subtitle: {
    fontSize: 16,
    color: 'grey',
    marginVertical: 10,
  },
  inputContainer: {
    marginTop: 20,
  },
  inputLabel: {
    fontSize: 14,
    color: 'grey',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
  },
  eyeIcon: {
    padding: 10,
  },
  loginButton: {
    backgroundColor: 'green',
    borderRadius: 8,
    paddingVertical: 15,
    marginTop: 30,
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  signupText: {
    color: 'green',
    fontSize: 16,
    marginTop: 20,
    textAlign: 'center',
  },
  forgotPasswordText: {
    color: 'grey',
    fontSize: 16,
    marginTop: 10,
    textAlign: 'center',
  },
  fingerprintContainer: {
    alignItems: 'center',
    marginTop: 30,
  },
  versionText: {
    fontSize: 14,
    color: 'grey',
    textAlign: 'center',
    marginTop: 30,
  },
  errorText: {
    color: 'red',
    marginTop: 10,
    textAlign: 'start',
  },
});

export default LoginPage;

