import React from "react"
import { Text, View } from "react-native"
import Button from "@/components/Button"
import { useMachinesCRUD } from "@/core/modules/machines/hooks"
import { Category } from "@/types/entities"
import Machines from "./Machines"

type Props = {
  category: Category
}

const CategoryFilterContainer = ({ category }: Props) => {
  const { createMachine } = useMachinesCRUD()

  return (
    <View className="p-3">
      <View className="mb-3 pb-2 flex-row justify-between items-center border-b border-gray-200 border-solid">
        <Text className="text-2xl font-bold">{category.name}</Text>
        <Button onPress={() => createMachine(category.id)}>
          <Text className="text-white">Add new item</Text>
        </Button>
      </View>
      <Machines category={category} />
    </View>
  )
}

export default CategoryFilterContainer
