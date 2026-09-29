import { StyleSheet, TextInput, View } from 'react-native';

import { colors } from '../theme/colors';

type FormFieldProps = {
  label: string;
  placeholder: string;
  value: string;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
  returnKeyType?: 'done' | 'go' | 'next' | 'search' | 'send';
  onChangeText: (value: string) => void;
};

export function FormField({
  label,
  placeholder,
  value,
  autoCapitalize = 'none',
  returnKeyType = 'done',
  onChangeText,
}: FormFieldProps) {
  return (
    <View style={styles.field}>
      <TextInput
        accessibilityLabel={label}
        autoCapitalize={autoCapitalize}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="#777777"
        returnKeyType={returnKeyType}
        style={styles.input}
        value={value}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  field: {
    width: '100%',
  },
  input: {
    width: '100%',
    height: 38,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 6,
    color: colors.text,
    fontSize: 13,
    backgroundColor: colors.background,
  },
});
