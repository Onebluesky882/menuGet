import Svg, { Circle, Path, Rect, Line } from "react-native-svg";

type IconProps = {
  size?: number;
  color?: string;
};

export const SearchSvg = ({ size = 22, color = "#64748B" }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Circle cx="10.5" cy="10.5" r="6.5" stroke={color} strokeWidth="2" />
    <Path
      d="M15.5 15.5L21 21"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
    />
  </Svg>
);

export const CartSvg = ({ size = 24, color = "#FFFFFF" }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M3 4H5L7.5 15H18L21 7H6"
      stroke={color}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Circle cx="9" cy="19" r="1.5" fill={color} />
    <Circle cx="17" cy="19" r="1.5" fill={color} />
  </Svg>
);

export const UserSvg = ({ size = 24, color = "#334155" }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Circle cx="12" cy="8" r="4" stroke={color} strokeWidth="1.8" />
    <Path
      d="M4 21C4 16.6 7.6 13 12 13C16.4 13 20 16.6 20 21"
      stroke={color}
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  </Svg>
);

export const PlusSvg = ({ size = 20, color = "#FFFFFF" }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M12 5V19M5 12H19"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
    />
  </Svg>
);

export const ArrowRightSvg = ({ size = 20, color = "#FFFFFF" }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M5 12H19M12 5L19 12L12 19"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const FoodSvg = ({ size = 28, color = "#F97316" }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Circle cx="12" cy="12" r="9" stroke={color} strokeWidth="1.8" />
    <Circle cx="12" cy="12" r="5.5" stroke={color} strokeWidth="1.5" />
    <Path
      d="M3 8H5M19 8H21M3 16H5M19 16H21"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </Svg>
);

export const NoodleSvg = ({ size = 28, color = "#F97316" }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M3 12H21L19 18C18.5 20 16.5 21 12 21C7.5 21 5.5 20 5 18L3 12Z"
      stroke={color}
      strokeWidth="1.7"
      strokeLinejoin="round"
    />
    <Path
      d="M6 9C6 6 9 6 9 9M11 9C11 6 14 6 14 9M16 9C16 6 19 6 19 9"
      stroke={color}
      strokeWidth="1.7"
      strokeLinecap="round"
    />
  </Svg>
);

export const DrinkSvg = ({ size = 28, color = "#F97316" }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M6 8H18L16.5 21H7.5L6 8Z"
      stroke={color}
      strokeWidth="1.7"
      strokeLinejoin="round"
    />
    <Path
      d="M14 3L18 8M9 12H15"
      stroke={color}
      strokeWidth="1.7"
      strokeLinecap="round"
    />
  </Svg>
);

export const DessertSvg = ({ size = 28, color = "#F97316" }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M4 14H20L18 20H6L4 14Z"
      stroke={color}
      strokeWidth="1.7"
      strokeLinejoin="round"
    />
    <Path
      d="M5 14C5 11 8 9 12 9C16 9 19 11 19 14M12 9V5"
      stroke={color}
      strokeWidth="1.7"
      strokeLinecap="round"
    />
    <Circle cx="12" cy="4" r="1.5" stroke={color} strokeWidth="1.5" />
  </Svg>
);

export const SnackSvg = ({ size = 28, color = "#F97316" }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M5 7L7 4H17L19 7L17 20H7L5 7Z"
      stroke={color}
      strokeWidth="1.7"
      strokeLinejoin="round"
    />
    <Path
      d="M5 7H19M9 11H15"
      stroke={color}
      strokeWidth="1.7"
      strokeLinecap="round"
    />
  </Svg>
);

export const StarSvg = ({ size = 28, color = "#F97316" }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M12 3L14.8 8.7L21 9.6L16.5 14L17.6 20.2L12 17.2L6.4 20.2L7.5 14L3 9.6L9.2 8.7L12 3Z"
      stroke={color}
      strokeWidth="1.7"
      strokeLinejoin="round"
    />
  </Svg>
);

export const ClockSvg = ({ size = 16, color = "#64748B" }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Circle cx="12" cy="12" r="9" stroke={color} strokeWidth="1.8" />
    <Path
      d="M12 7V12L15 14"
      stroke={color}
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  </Svg>
);
