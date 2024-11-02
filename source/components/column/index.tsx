import {StyleSheet, View, ViewProps} from 'react-native';

interface ColumnViewProps extends ViewProps {
  gap?: number; // Optional 'gap' prop to specify spacing between children
}

const Column: React.FC<ColumnViewProps> = ({
  gap,
  style,
  children,
  ...props
}) => {
  return (
    <View style={[styles.column, style, {gap: gap}]} {...props}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  column: {
    flexDirection: 'column',
  },
});

export default Column;
