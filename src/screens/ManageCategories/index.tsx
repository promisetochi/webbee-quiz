import Button from "@/components/Button"
import { useCategoriesCrud } from "@/core/modules/categories/hooks"
import { selectAllCategories } from "@/core/modules/categories/slice"
import { useAppSelector } from "@/core/redux/store"
import React from "react"
import { Text, View } from "react-native"
import { ScrollView } from "react-native-gesture-handler"
import Categories from "./components/Categories"

const ManageCategories = () => {
  const categories = useAppSelector(selectAllCategories)
  const { createCategory } = useCategoriesCrud()
  return (
    <View className="p-4 flex-1 flex-col">
      <ScrollView className="flex-1 w-full">
        {categories.length === 0 ? (
          <Text className="text-gray-500 text-center">
            No Categories to display
          </Text>
        ) : (
          <Categories categories={categories} />
        )}
      </ScrollView>
      <Button onPress={createCategory}>
        <Text className="text-center text-white text-xs uppercase">
          Add new category
        </Text>
      </Button>
    </View>
  )
}

export default ManageCategories
