import { useTheme } from "@mui/material";

export const useThemePalette = () => {
    const theme = useTheme();
    return theme?.theme_palette
}