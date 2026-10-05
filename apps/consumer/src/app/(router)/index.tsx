import { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const menu = [
  { name: 1 },
  { name: 2 },
  { name: 3 },
  { name: 4 },
  { name: 5 },
  { name: 6 },
];

const Homepage = () => {
  const board = [{ name: 1 }, { name: 2 }, { name: 3 }];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % board.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const banner = board.slice(index, index + 1);

  return (
    <SafeAreaView>
      <View className=" px-2 gap-2">
        <View className="flex items-center justify-center gap-2">
          <View className="border h-10 items-center flex-row justify-between w-full">
            <Text> logo </Text>
            <Text> option </Text>
          </View>

          {/* Banner */}

          <View className="h-10 w-full border">
            {banner.map((i) => (
              <Board key={i.name} item={i.name} />
            ))}
          </View>

          {/* shop */}
          <View className="  w-full ">
            <View className="flex-row flex-wrap ">
              {menu.map((i) => (
                <Menu key={i.name} item={i.name} />
              ))}
            </View>
          </View>
        </View>
        <View className="border w-full ">
          <Text> Shops</Text>
          <View>
            <Text>list 1</Text>
            <Text>list 2</Text>
            <Text>list 3</Text>
            <Text>list 4</Text>
          </View>
        </View>
        <View className="border w-full ">
          <Text> Shops</Text>
          <View>
            <Text>list 1</Text>
            <Text>list 2</Text>
            <Text>list 3</Text>
            <Text>list 4</Text>
          </View>
        </View>
        <View className="border w-full ">
          <Text> Shops</Text>
          <View>
            <Text>list 1</Text>
            <Text>list 2</Text>
            <Text>list 3</Text>
            <Text>list 4</Text>
          </View>
        </View>
        <View className="border w-full ">
          <Text> Shops</Text>
          <View>
            <Text>list 1</Text>
            <Text>list 2</Text>
            <Text>list 3</Text>
            <Text>list 4</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const Menu = ({ item }: { item: number }) => {
  return (
    <View className="  w-1/3 ">
      <View className="border rounded border-gray-300 shadow m-1 p-2 flex-row justify-center ">
        <Text className=" ">menu {item}</Text>
      </View>
    </View>
  );
};

const Board = ({ item }: { item: number }) => {
  return (
    <View className=" w-full ">
      <View className="  rounded     p-2 flex-row justify-center ">
        <Text className=" ">banner {item}</Text>
      </View>
    </View>
  );
};
export default Homepage;
