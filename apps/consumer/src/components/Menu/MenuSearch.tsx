import { SymbolView } from "expo-symbols";
import { Dispatch, SetStateAction } from "react";
import { TextInput, View } from "react-native";

type MenuSearchProps = {
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
};
export const MenuSearch = ({ search, setSearch }: MenuSearchProps) => {
  return (
    <View className="px-5 ">
      <View className="flex-row items-center rounded-2xl bg-white px-4">
        <SymbolView name="magnifyingglass" size={18} tintColor="gray" />

        <TextInput
          value={search}
          onChangeText={setSearch}
          placeholder="ค้นหาเมนู..."
          placeholderTextColor="#94a3b8"
          className="ml-3 flex-1 py-4 text-base text-slate-900"
        />
      </View>
    </View>
  );
};
