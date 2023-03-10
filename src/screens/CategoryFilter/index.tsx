import { DrawerMenuList } from "@/Navigation"
import { selectCategoryById } from "@/core/modules/categories/slice"
import { useAppSelector } from "@/core/redux/store"
import { NavigatorScreenParams, useNavigation } from "@react-navigation/core"
import { DrawerScreenProps } from "@react-navigation/drawer"
import React, { useEffect } from "react"
import CategoryFilterContainer from "./components/CategoryFilterContainer"
import { ScrollView } from "react-native-gesture-handler"

const CategoryFilter = (
  props: DrawerScreenProps<DrawerMenuList, "CategoryFilter">
) => {
  const id = props.route.params.id
  const category = useAppSelector((state) => selectCategoryById(state, id))
  const { setOptions } = useNavigation()

  useEffect(() => {
    if (category?.name) setOptions({ title: category?.name })
  }, [category?.name])

  if (!category) return null

  return (
    <ScrollView>
      <CategoryFilterContainer category={category} />
    </ScrollView>
  )
}

export default CategoryFilter
