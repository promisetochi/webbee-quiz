import { DrawerMenuList } from "@/Navigation"
import Button from "@/components/Button"
import { NavigationProp, useNavigation } from "@react-navigation/core"
import React, { useCallback } from "react"
import { Pressable, Text, View } from "react-native"

const Empty = () => {
  const { navigate } = useNavigation<NavigationProp<DrawerMenuList>>()
  const goToManageCategories = useCallback(
    () => navigate("ManageCategories"),
    []
  )
  return (
    <View className="flex-1 w-full items-center justify-center">
      <Text className="mb-4">No categories found</Text>
      <Button onPress={goToManageCategories}>
        <Text className="text-white text-xs uppercase">Create a category</Text>
      </Button>
    </View>
  )
}

export default Empty
