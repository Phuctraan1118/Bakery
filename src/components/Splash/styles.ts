import { StyleSheet } from "react-native"
import { THEME } from "../../styles/theme"

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: THEME.COLORS.BRAND_YELLOW_DARKNIGHT
  },
  logoContainer: {
    position: "absolute",
    flexDirection: 'row',
  }
})