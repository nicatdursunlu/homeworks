import { Dimensions } from "react-native";
import { GLOBEL_STYLES } from "../styles/globalStyles";

export function getWidthByPercents(percents = 100, spacesCount = 0) {
  return ((Dimensions.get('window').width - GLOBEL_STYLES.PADDING * spacesCount) / 100) * percents;
}
