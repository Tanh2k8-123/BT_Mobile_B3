import { Modal, StyleSheet, Text, View } from 'react-native';

import { AppButton } from './AppButton';
import { colors } from '../theme/colors';

type AppDialogProps = {
  visible: boolean;
  title: string;
  message: string;
  onClose: () => void;
};

export function AppDialog({ visible, title, message, onClose }: AppDialogProps) {
  return (
    <Modal
      animationType="fade"
      onRequestClose={onClose}
      transparent
      visible={visible}
    >
      <View style={styles.overlay}>
        <View accessibilityViewIsModal style={styles.dialog}>
          <Text style={styles.title}>{title}</Text>
          <Text accessibilityRole="alert" style={styles.message}>{message}</Text>
          <AppButton onPress={onClose} style={styles.action} title="Đã hiểu" />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    backgroundColor: 'rgba(0, 0, 0, 0.42)',
  },
  dialog: {
    width: '100%',
    maxWidth: 340,
    padding: 20,
    borderRadius: 12,
    backgroundColor: colors.background,
    elevation: 8,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 12,
  },
  title: {
    color: colors.text,
    fontSize: 18,
    fontWeight: '700',
  },
  message: {
    marginTop: 10,
    color: colors.secondaryText,
    fontSize: 14,
    lineHeight: 20,
  },
  action: {
    alignSelf: 'flex-end',
  },
});
