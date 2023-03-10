import { Category as TCategory } from "@/types/entities"
import React from "react"
import { View } from "react-native"
import Category from "./Category"
import { useIsTablet } from "@/core/modules/ui/hooks"

type Props = {
  categories: TCategory[]
}

const Categories = ({ categories }: Props) => {
  const isTablet = useIsTablet()
  return (
    <View className="flex-row flex-wrap">
      {categories.map((category) => {
        return (
          <View
            key={category.id}
            className={`mb-3 px-1.5 ${isTablet ? "w-1/2" : "w-full"}`}
          >
            <Category category={category} />
          </View>
        )
      })}
    </View>
  )
}

export default Categories
