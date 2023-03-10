import { useWindowDimensions } from "react-native"

export const useIsTablet = () => {
  const dimensions = useWindowDimensions()

  return dimensions.width > 768
}
