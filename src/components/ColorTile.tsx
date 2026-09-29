import { StyleSheet, Text, View, type ViewStyle } from 'react-native';

type ColorTileProps = {
  number: string;
  color: string;
  darkText?: boolean;
  style?: ViewStyle;
};

export function ColorTile({ number, color, darkText = false, style }: ColorTileProps) {
  return (
    <View style={[styles.tile, { backgroundColor: color }, style]}>
      <Text style={[styles.number, darkText && styles.darkNumber]}>{number}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  tile: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  number: {
    color: '#FFFFFF',
    fontSize: 38,
    fontWeight: '700',
  },
  darkNumber: {
    color: '#111111',
  },
});
