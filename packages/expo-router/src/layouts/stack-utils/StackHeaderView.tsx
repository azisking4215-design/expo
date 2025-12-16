import type { NativeStackHeaderItemCustom } from '@react-navigation/native-stack';

export interface StackHeaderViewProps {
  /**
   * Can be any React node.
   */
  children?: NativeStackHeaderItemCustom['element'];
  hideSharedBackground?: boolean;
}

/**
 * A wrapper to render custom content in the header.
 *
 * Use as `Stack.Header.Item` to render a custom React element into the header
 *
 * @example
 * ```tsx
 * import { Stack } from 'expo-router';
 * import { Text } from 'react-native';
 *
 * function CustomHeaderElement() {
 *   return <Text>Custom Element</Text>;
 * }
 *
 * function Screen() {
 *   return (
 *     <>
 *       <ScreenContent />
 *       <Stack.Screen>
 *         <Stack.Header>
 *           <Stack.Header.Left>
 *             <Stack.Header.Item>
 *               <CustomHeaderElement />
 *             </Stack.Header.Item>
 *           </Stack.Header.Left>
 *         </Stack.Header>
 *       </Stack.Screen>
 *     </>
 *   );
 * }
 * ```
 *
 * @platform ios
 */
export const StackHeaderView: React.FC<StackHeaderViewProps> = () => null;

export function convertStackHeaderViewPropsToRNHeaderItem(
  props: StackHeaderViewProps
): NativeStackHeaderItemCustom {
  const { children, ...rest } = props;
  if (!children) {
    console.warn(
      'Stack.Header.View requires a child element to render custom content in the header.'
    );
  }
  return {
    ...rest,
    type: 'custom',
    element: children ?? <></>,
  };
}
