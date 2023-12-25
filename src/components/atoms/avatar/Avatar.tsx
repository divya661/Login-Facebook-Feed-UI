import { StyledAvatarContainer, StyledAvatarImage } from "./avatar.styled";
import { TextSizeType, Text } from "../text";

type AvatarSizes = "xs" | "sm" | "md" | "lg" | "xl";

type AvatarProps = {
  accessibilityLabel?: string;
  initials?: string;
  name: string;
  onError?: () => void;
  size?: AvatarSizes;
  source?: string;
};

const getInitials = (name: string) => {
  return name
    .split(" ")
    .map((word) => word.charAt(0))
    .join("")
    .toLocaleUpperCase();
};

const Avatar = ({
  accessibilityLabel,
  initials,
  name,
  onError,
  size = "md",
  source
}: AvatarProps) => {
  const renderContent = () => {
    if (Boolean(source)) {
      return (
        <StyledAvatarImage
          src={source}
          alt={accessibilityLabel || name}
          onError={onError}
        />
      );
    } else if (Boolean(initials)) {
      return <Text size={size as TextSizeType}>{initials}</Text>;
    } else {
      return <Text size={size as TextSizeType}>{getInitials(name)}</Text>;
    }
  };

  return (
    <StyledAvatarContainer size={size}>{renderContent()}</StyledAvatarContainer>
  );
};

export { Avatar };
export type { AvatarSizes };

