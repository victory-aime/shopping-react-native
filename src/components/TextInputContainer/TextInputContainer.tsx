import {StyleSheet, View, TextInput} from 'react-native';
import React from 'react';

interface TextInputProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  secureTextEntry?: boolean;
  keyboardType?: 'default' | 'numeric' | 'email-address' | 'phone-pad';
  maxLength?: number;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
  multiline?: boolean;
  numberOfLines?: number;
  editable?: boolean;
  onSubmitEditing?: () => void;
}

const TextInputContainer: React.FC<TextInputProps> = ({
  value,
  onChangeText,
  placeholder,
  secureTextEntry,
  keyboardType,
  maxLength,
  autoCapitalize,
  multiline,
  numberOfLines,
  editable,
  onSubmitEditing,
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        maxLength={maxLength}
        autoCapitalize={autoCapitalize}
        multiline={multiline}
        numberOfLines={numberOfLines}
        editable={editable}
        onSubmitEditing={onSubmitEditing}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 12,
  },
  input: {
    padding: 20,
    borderRadius: 5,
    gap: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F4F8FB',
  },
});

export default TextInputContainer;
