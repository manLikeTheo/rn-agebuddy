import { View, Text, Dimensions, Image, TouchableOpacity } from "react-native";
import Carousel from "react-native-reanimated-carousel";

const { width } = Dimensions.get("window");
// console.log(width);

interface Banner {
  image: string;
  id: string;
}

interface BannerCarouselProps {
  banners: Banner[];
}

const renderFeature = ({ item }: any) => {
  return (
    <TouchableOpacity>
      <Image source={item.image} className="w-50  h-full cover" />
      <Text className="text-sm">{item.title}</Text>
    </TouchableOpacity>
  );
};

const BannerCarousel: React.FC<BannerCarouselProps> = ({ banners }) => {
  return (
    <Carousel
      loop
      width={width}
      height={200}
      autoPlay={true}
      autoPlayInterval={3000}
      data={banners}
      renderItem={renderFeature}
    />
  );
};

// const BannerCarousel = () => {
//   return (
//     <View>
//       <Text>BannerCarousel</Text>
//     </View>
//   );
// };

export default BannerCarousel;
