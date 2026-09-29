import { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { AppButton } from '../components/AppButton';
import { AppDialog } from '../components/AppDialog';
import { ColorTileGrid } from '../components/ColorTileGrid';
import { FormField } from '../components/FormField';
import { colors } from '../theme/colors';
import type { RootStackParamList } from '../types/navigation';

type Props = NativeStackScreenProps<RootStackParamList, 'Screen1'>;

export function Screen1({ navigation }: Props) {
  const [userName, setUserName] = useState('');
  const [mssv, setMssv] = useState('');
  const [dialogMessage, setDialogMessage] = useState<string | null>(null);

  function submitStudentInfo() {
    const student = { userName: userName.trim(), mssv: mssv.trim() };
    const missingFields = [
      !student.userName && 'UserName',
      !student.mssv && 'MSSV',
    ].filter(Boolean);

    if (missingFields.length > 0) {
      setDialogMessage(`Vui lòng nhập ${missingFields.join(' và ')}.`);
      return;
    }

    navigation.navigate('Screen2', student);
  }

  return (
    <SafeAreaView edges={['top', 'bottom']} style={styles.safeArea}>
      <KeyboardAvoidingView
        style={styles.keyboardView}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <View style={styles.frame}>
          <ScrollView
            contentContainerStyle={styles.scrollContent}
            keyboardShouldPersistTaps="handled"
            style={styles.scrollView}
          >
            <ColorTileGrid />
            <View style={styles.spacer} />

            <View style={styles.formPanel}>
              <Text style={styles.heading}>Nhập thông tin sinh viên</Text>
              <FormField
                autoCapitalize="words"
                label="UserName"
                onChangeText={setUserName}
                placeholder="Enter your name"
                returnKeyType="next"
                value={userName}
              />
              <FormField
                autoCapitalize="characters"
                label="MSSV"
                onChangeText={setMssv}
                placeholder="Enter your student ID"
                value={mssv}
              />
              <AppButton title="Click me" onPress={submitStudentInfo} />
            </View>
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
      <AppDialog
        message={dialogMessage ?? ''}
        onClose={() => setDialogMessage(null)}
        title="Thiếu thông tin"
        visible={dialogMessage !== null}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.background,
  },
  keyboardView: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },
  frame: {
    flex: 1,
    width: '100%',
    maxWidth: 430,
    borderWidth: 1,
    borderColor: '#E8E2E4',
    backgroundColor: colors.background,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 10,
    paddingBottom: 14,
  },
  spacer: {
    flexGrow: 1,
    minHeight: 26,
  },
  formPanel: {
    width: '100%',
    alignItems: 'center',
    gap: 6,
  },
  heading: {
    marginBottom: 8,
    color: '#333333',
    fontSize: 17,
    fontWeight: '600',
  },
});
