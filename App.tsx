import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  useWindowDimensions,
} from 'react-native';

type Student = {
  userName: string;
  mssv: string;
};

function ColorTile({
  number,
  color,
  darkText = false,
}: {
  number: string;
  color: string;
  darkText?: boolean;
}) {
  return (
    <View style={[styles.tile, { backgroundColor: color }]}>
      <Text style={[styles.tileNumber, darkText && styles.darkNumber]}>{number}</Text>
    </View>
  );
}

export default function App() {
  const { height, width } = useWindowDimensions();
  const [screen, setScreen] = useState<'form' | 'details'>('form');
  const [userName, setUserName] = useState('');
  const [mssv, setMssv] = useState('');
  const [errors, setErrors] = useState<{ userName?: string; mssv?: string }>({});
  const [student, setStudent] = useState<Student>({ userName: '', mssv: '' });

  const frameWidth = Math.min(width, 430);
  const unit = Math.min((frameWidth - 32) / 255, height / 640, 1.15);

  function openDetails() {
    const nextErrors = {
      userName: userName.trim() ? undefined : 'Vui lòng nhập UserName.',
      mssv: mssv.trim() ? undefined : 'Vui lòng nhập MSSV.',
    };
    setErrors(nextErrors);
    if (nextErrors.userName || nextErrors.mssv) return;

    setStudent({ userName: userName.trim(), mssv: mssv.trim() });
    setScreen('details');
  }

  function goBack() {
    setScreen('form');
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar hidden />
      <KeyboardAvoidingView
        style={styles.keyboardView}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        {screen === 'form' ? (
          <View style={[styles.screen, { width: frameWidth }]}>
            <ScrollView
              style={styles.scrollView}
              contentContainerStyle={styles.formScroll}
              keyboardShouldPersistTaps="handled"
            >
              <View style={[styles.tileGrid, { paddingTop: 10 * unit }]}>
                <View style={[styles.tileRow, { height: 102 * unit, gap: 7 * unit }]}>
                  <ColorTile number="1" color="#2879E8" />
                  <ColorTile number="2" color="#F2383B" />
                </View>
                <View style={[styles.tileRow, { height: 102 * unit, gap: 7 * unit, marginTop: 7 * unit }]}>
                  <View style={{ flex: 1 }}><ColorTile number="3" color="#FFD21B" darkText /></View>
                  <View style={{ flex: 1 }}><ColorTile number="4" color="#2BA66C" /></View>
                  <View style={{ flex: 2 }}><ColorTile number="5" color="#713DDD" /></View>
                </View>
                <View style={{ height: 84 * unit, marginTop: 7 * unit }}>
                  <ColorTile number="6" color="#FF7918" />
                </View>
              </View>

              <View style={styles.formSpacer} />
              <View style={styles.formPanel}>
                <Text style={styles.formHeading}>Nhập thông tin sinh viên</Text>
                <TextInput
                  accessibilityLabel="UserName"
                  autoCapitalize="words"
                  onChangeText={(value) => {
                    setUserName(value);
                    if (value.trim()) setErrors((current) => ({ ...current, userName: undefined }));
                  }}
                  placeholder="Enter your name"
                  placeholderTextColor="#777"
                  returnKeyType="next"
                  style={styles.input}
                  value={userName}
                />
                {errors.userName ? <Text style={styles.errorText}>{errors.userName}</Text> : null}
                <TextInput
                  accessibilityLabel="MSSV"
                  autoCapitalize="characters"
                  onChangeText={(value) => {
                    setMssv(value);
                    if (value.trim()) setErrors((current) => ({ ...current, mssv: undefined }));
                  }}
                  placeholder="Enter your student ID"
                  placeholderTextColor="#777"
                  returnKeyType="done"
                  style={styles.input}
                  value={mssv}
                />
                {errors.mssv ? <Text style={styles.errorText}>{errors.mssv}</Text> : null}
                <Pressable
                  accessibilityRole="button"
                  onPress={openDetails}
                  style={({ pressed }) => [styles.primaryButton, pressed && styles.buttonPressed]}
                >
                  <Text style={styles.primaryButtonText}>Click me</Text>
                </Pressable>
              </View>
            </ScrollView>
          </View>
        ) : (
          <View style={[styles.detailsScreen, { width: frameWidth }]}>
            <Pressable
              accessibilityLabel="Quay lại Screen 1"
              accessibilityRole="button"
              hitSlop={12}
              onPress={goBack}
              style={({ pressed }) => [styles.backButton, pressed && styles.backPressed]}
            >
              <Text style={styles.backArrow}>←</Text>
            </Pressable>
            <View style={styles.detailsContent}>
              <Text style={styles.detailsTitle}>Screen 2</Text>
              <Text style={styles.detailsText}>Name: {student.userName}</Text>
              <Text style={styles.detailsText}>Student ID: {student.mssv}</Text>
            </View>
          </View>
        )}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  keyboardView: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },
  screen: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#e8e2e4',
    backgroundColor: '#fff',
  },
  scrollView: {
    flex: 1,
  },
  formScroll: {
    flexGrow: 1,
    paddingHorizontal: 10,
    paddingBottom: 14,
  },
  tileGrid: {
    width: '100%',
  },
  tileRow: {
    flexDirection: 'row',
  },
  tile: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tileNumber: {
    color: '#fff',
    fontSize: 38,
    fontWeight: '700',
  },
  darkNumber: {
    color: '#111',
  },
  formSpacer: {
    flexGrow: 1,
    minHeight: 26,
  },
  formPanel: {
    width: '100%',
    alignItems: 'center',
    gap: 6,
  },
  formHeading: {
    marginBottom: 8,
    color: '#333',
    fontSize: 17,
    fontWeight: '600',
  },
  input: {
    width: '100%',
    height: 38,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#d5d5d5',
    borderRadius: 6,
    color: '#222',
    fontSize: 13,
    backgroundColor: '#fff',
  },
  errorText: {
    alignSelf: 'flex-start',
    marginTop: -3,
    color: '#c62828',
    fontSize: 12,
  },
  primaryButton: {
    minWidth: 64,
    minHeight: 36,
    marginTop: 18,
    paddingHorizontal: 14,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ed8b28',
  },
  buttonPressed: {
    opacity: 0.78,
  },
  primaryButtonText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '700',
  },
  detailsScreen: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#e8e2e4',
    backgroundColor: '#fff',
  },
  backButton: {
    position: 'absolute',
    zIndex: 1,
    top: 32,
    left: 12,
    width: 42,
    height: 34,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backPressed: {
    opacity: 0.55,
  },
  backArrow: {
    color: '#111',
    fontSize: 32,
    lineHeight: 34,
    fontWeight: '600',
  },
  detailsContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  detailsTitle: {
    marginBottom: 12,
    color: '#111',
    fontSize: 20,
    fontWeight: '700',
  },
  detailsText: {
    marginBottom: 6,
    color: '#555',
    fontSize: 14,
  },
});
