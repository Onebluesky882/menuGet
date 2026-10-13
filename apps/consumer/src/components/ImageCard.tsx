import { Image, ImageContentFit } from "expo-image";
import { ImageStyle, StyleProp } from "react-native";
type ImageCardProps = {
  url: string;
  contentFit: ImageContentFit;
  transition?: number;
  style?: StyleProp<ImageStyle>;
};

const ImageCard = ({
  url,
  contentFit,
  transition = 0,
  style,
}: ImageCardProps) => {
  const blurhash =
    "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";
  return (
    <Image
      style={style}
      source={url}
      placeholder={{ blurhash }}
      contentFit={contentFit}
      transition={transition}
    />
  );
};

export default ImageCard;
