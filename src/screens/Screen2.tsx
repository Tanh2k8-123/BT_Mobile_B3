import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { AppButton } from '../components/AppButton';
import { colors } from '../theme/colors';
import type { RootStackParamList } from '../types/navigation';

type Props = NativeStackScreenProps<RootStackParamList, 'Screen2'>;

export function Screen2({ navigation, route }: Props) {
  const { userName, mssv } = route.params;

  return (
    <SafeAreaView edges={['top', 'bottom']} style={styles.safeArea}>
      <View style={styles.frame}>
        <AppButton
          onPress={() => navigation.goBack()}
          style={styles.backButton}
          title="Back"
          variant="back"
        />

        <View style={styles.details}>
          <Text style={styles.heading}>Screen 2</Text>
          <Text style={styles.detailText}>Name: {userName}</Text>
          <Text style={styles.detailText}>Student ID: {mssv}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.background,
  },
  frame: {
    flex: 1,
    width: '100%',
    maxWidth: 430,
    borderWidth: 1,
    borderColor: '#E8E2E4',
    backgroundColor: colors.background,
  },
  backButton: {
    position: 'absolute',
    zIndex: 1,
    top: 10,
    left: 10,
  },
  details: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  heading: {
    marginBottom: 12,
    color: '#111111',
    fontSize: 20,
    fontWeight: '700',
  },
  detailText: {
    marginBottom: 6,
    color: colors.secondaryText,
    fontSize: 14,
  },
});
