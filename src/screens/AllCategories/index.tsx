import React from "react"
import { selectAllCategories } from "@/core/modules/categories/slice"
import { useAppSelector } from "@/core/redux/store"
import { ScrollView } from "react-native"
import Empty from "./components/Empty"
import CategoryFilterContainer from "../CategoryFilter/components/CategoryFilterContainer"

const AllCategories = () => {
  const categories = useAppSelector(selectAllCategories)
  const isEmpty = categories.length === 0

  return isEmpty ? (
    <Empty />
  ) : (
    <ScrollView className="flex-col flex-1">
      {categories.map((category) => (
        <CategoryFilterContainer key={category.id} category={category} />
      ))}
    </ScrollView>
  )
}

export default AllCategories
