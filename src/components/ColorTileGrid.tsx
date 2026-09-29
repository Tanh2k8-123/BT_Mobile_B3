import { StyleSheet, View, useWindowDimensions } from 'react-native';

import { ColorTile } from './ColorTile';
import { colors } from '../theme/colors';

export function ColorTileGrid() {
  const { height, width } = useWindowDimensions();
  const frameWidth = Math.min(width, 430);
  const unit = Math.min((frameWidth - 32) / 255, height / 640, 1.15);

  return (
    <View style={[styles.grid, { paddingTop: 10 * unit }]}>
      <View style={[styles.row, { height: 102 * unit, gap: 7 * unit }]}>
        <ColorTile number="1" color={colors.tiles.blue} />
        <ColorTile number="2" color={colors.tiles.red} />
      </View>

      <View style={[styles.row, { height: 102 * unit, gap: 7 * unit, marginTop: 7 * unit }]}>
        <ColorTile number="3" color={colors.tiles.yellow} darkText style={styles.smallTile} />
        <ColorTile number="4" color={colors.tiles.green} style={styles.smallTile} />
        <ColorTile number="5" color={colors.tiles.purple} style={styles.wideTile} />
      </View>

      <View style={{ height: 84 * unit, marginTop: 7 * unit }}>
        <ColorTile number="6" color={colors.tiles.orange} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  grid: {
    width: '100%',
  },
  row: {
    flexDirection: 'row',
  },
  smallTile: {
    flex: 1,
  },
  wideTile: {
    flex: 2,
  },
});
