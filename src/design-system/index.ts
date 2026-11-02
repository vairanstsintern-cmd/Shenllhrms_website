/**
 * RonDesignLab-inspired Design System Tokens for Shenll HRMS
 * Based on RonDesignLab (@RonDesignLab) UI/UX philosophy:
 * - Ultra-clean modern bento cards with subtle glass borders and soft drop shadows
 * - Pill-shaped segmented tabs & filters with high-contrast pills (pure black/dark slate active state)
 * - Neo-tactile pill badges with micro-status indicators (lime green, warm orange, royal blue, punchy amber)
 * - Soft mesh canvas backgrounds (light sage, pastel aqua, chalk white with soft vignette)
 * - High-contrast action pills & circular arrow action buttons
 * - Micro-segmented heatmaps, gauge curves, and sleek data visualization patterns
 */

export const RON_DESIGN_TOKENS = {
  colors: {
    // Canvas & Surfaces
    canvas: {
      base: "#EEF3F2", // signature RonDesign soft tinted slate/sage mist
      light: "#F7FAF9",
      white: "#FFFFFF",
      subtle: "rgba(255, 255, 255, 0.72)",
      cardBg: "#FFFFFF",
      surfaceLight: "#F3F7F6",
      surfaceMuted: "#E9EFF1",
    },
    // High-Contrast Dark Accents
    dark: {
      primary: "#0E151B", // pure dark pill & heading tone
      secondary: "#1A252C",
      tertiary: "#26353E",
      muted: "#6B7A85",
      faint: "#99A7B0",
    },
    // RonDesign Vibrant Accent Accents
    accents: {
      lime: {
        bg: "rgba(163, 246, 57, 0.18)",
        border: "rgba(163, 246, 57, 0.4)",
        text: "#2F6B00",
        solid: "#9DF52A",
        pill: "#A5F73A",
      },
      orange: {
        bg: "rgba(255, 107, 53, 0.12)",
        border: "rgba(255, 107, 53, 0.3)",
        text: "#C43A00",
        solid: "#FF6B35",
      },
      blue: {
        bg: "rgba(41, 100, 245, 0.12)",
        border: "rgba(41, 100, 245, 0.3)",
        text: "#1448C4",
        solid: "#2964F5",
      },
      yellow: {
        bg: "rgba(255, 209, 36, 0.18)",
        border: "rgba(255, 209, 36, 0.4)",
        text: "#8A6B00",
        solid: "#FFD124",
      },
      teal: {
        bg: "rgba(8, 126, 139, 0.12)",
        border: "rgba(8, 126, 139, 0.3)",
        text: "#087E8B",
        solid: "#087E8B",
      },
    },
  },
  radius: {
    badge: "9999px",
    pill: "9999px",
    cardSmall: "18px",
    card: "28px",
    cardLarge: "36px",
    modal: "32px",
  },
  shadows: {
    card: "0 10px 30px -10px rgba(14, 21, 27, 0.06), 0 2px 6px -1px rgba(14, 21, 27, 0.02)",
    cardHover: "0 20px 45px -12px rgba(14, 21, 27, 0.12), 0 8px 16px -4px rgba(14, 21, 27, 0.04)",
    elevated: "0 30px 60px -15px rgba(14, 21, 27, 0.15)",
    pill: "0 4px 14px rgba(14, 21, 27, 0.18)",
  },
} as const;

export default RON_DESIGN_TOKENS;
