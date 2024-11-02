import {StyleSheet, View, ViewProps} from 'react-native';

interface RowViewProps extends ViewProps {
  gap?: number;
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | undefined;
}

const Row: React.FC<RowViewProps> = ({
  gap,
  justifyContent,
  style,
  children,
  ...props
}) => {
  return (
    <View style={[styles.row, style, {gap, justifyContent}]} {...props}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
});

export default Row;
