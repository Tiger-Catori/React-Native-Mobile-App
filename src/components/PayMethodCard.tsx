import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import {s, vs} from 'react-native-size-matters'
import { CashIcon } from "../assets/icons";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { FC, ReactNode } from 'react';

interface PayMethodCardProps {
  isSelected?: boolean
  title: string
  icon: ReactNode,
  onPress?: () => void
}

const PayMethodCardComponent: FC<PayMethodCardProps> = ({
  isSelected = false,
  title,
  icon,
  onPress,
}) => {
  return (
    <PayMethodCard
      isSelected={isSelected}
      title={title}
      icon={icon}
      onPress={onPress}
    />
  );
};

export default PayMethodCardComponent;

const PayMethodCard: FC<PayMethodCardProps> = ({
  isSelected = false,
  title,
  icon,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.banner}>
      {isSelected && (
        <View style={styles.tickContainer}>
          <FontAwesome6 name="check" size={14} color="#fff" />
        </View>
      )}

      <View style={[styles.card, isSelected && styles.selectedCardStyle]}>
        {icon}
      </View>

      <Text style={styles.label}>{title}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  card: {
    backgroundColor: '#F0F5FA',
    borderRadius: s(8),
    height: vs(72),
    justifyContent: 'center',
    alignItems: 'center'
  },
  label: {
    fontSize: s(14),
    color: '#464e57',
    alignItems: 'center',
    textAlign: 'center',
    marginTop: vs(4)
  },
  banner: {
    width: s(85)
  },
  selectedCardStyle: {
    backgroundColor: '#fff',
    borderWidth: s(2),
    borderColor: '#ff7622'
  },
  tickContainer: {
    height: s(24),
    width: s(24),
    borderRadius: s(12),
    borderWidth: s(2),
    borderColor: '#fff',
    backgroundColor: '#ff7622',
    position: 'absolute',
    zIndex: 1,
    top: s(-8),
    right: s(-8),
    justifyContent: 'center',
    alignItems: 'center'
  }
})
