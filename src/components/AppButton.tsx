import { Pressable, StyleSheet, Text, type StyleProp, type ViewStyle } from 'react-native';

import { colors } from '../theme/colors';

type AppButtonProps = {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'back';
  style?: StyleProp<ViewStyle>;
};

export function AppButton({ title, onPress, variant = 'primary', style }: AppButtonProps) {
  const isBackButton = variant === 'back';

  return (
    <Pressable
      accessibilityRole="button"
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        isBackButton ? styles.backButton : styles.primaryButton,
        pressed && styles.pressed,
        style,
      ]}
    >
      <Text style={[styles.label, isBackButton && styles.backLabel]}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
  },
  primaryButton: {
    minWidth: 64,
    minHeight: 36,
    marginTop: 18,
    paddingHorizontal: 14,
    borderRadius: 5,
  },
  backButton: {
    minWidth: 50,
    minHeight: 28,
    paddingHorizontal: 10,
    borderRadius: 6,
  },
  pressed: {
    backgroundColor: colors.pressed,
  },
  label: {
    color: colors.background,
    fontSize: 12,
    fontWeight: '700',
  },
  backLabel: {
    fontSize: 12,
    fontWeight: '600',
  },
});
