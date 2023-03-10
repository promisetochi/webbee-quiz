import TextInput from "@/components/TextInput"
import { useCategoriesCrud } from "@/core/modules/categories/hooks"
import {
  AttributeType,
  Attribute as TAttribute,
  Category as TCategory,
} from "@/types/entities"
import React, { useCallback } from "react"
import { Pressable, Text, View } from "react-native"
import Attribute from "./Attribute"
import { X } from "phosphor-react-native"
import { nanoid } from "@reduxjs/toolkit"
import Select from "@/components/Select"

type Props = {
  category: TCategory
}

const Category = ({ category }: Props) => {
  const { updateCategory, removeCategory } = useCategoriesCrud()
  const handleNameChange = (name: string) =>
    updateCategory({
      id: category.id,
      changes: {
        name,
      },
    })
  const updateAttribute = ({
    id,
    changes,
  }: { changes: Partial<TAttribute> } & Pick<TAttribute, "id">) => {
    if (
      "name" in changes &&
      category.attributes.some((attribute) => attribute.name === changes.name)
    )
      return
    updateCategory({
      id: category.id,
      changes: {
        attributes: category.attributes.map((attribute) =>
          attribute.id === id ? { ...attribute, ...changes } : attribute
        ),
      },
    })
  }
  const createNewAttribute = () =>
    updateCategory({
      id: category.id,
      changes: {
        attributes: [
          ...category.attributes,
          {
            id: nanoid(),
            name: "",
            type: AttributeType.TEXT,
          },
        ],
      },
    })
  const removeAttribute = (id: string) => {
    updateCategory({
      id: category.id,
      changes: {
        attributes: category.attributes.filter(
          (attribute) => attribute.id !== id
        ),
        titleAttribute:
          category.titleAttribute === id
            ? category.attributes.find((attribute) => attribute.id !== id)?.id
            : category.titleAttribute,
      },
    })
  }
  const updateCategoryTitleAttribute = (titleAttribute: string) =>
    updateCategory({
      id: category.id,
      changes: {
        titleAttribute,
      },
    })

  return (
    <View className="p-3 bg-white rounded-md shadow-md">
      <View className="flex-row">
        <Text className="flex-1 text-base">{category.name}</Text>
        <Pressable onPress={() => removeCategory(category.id)}>
          <X size={20} color="red" />
        </Pressable>
      </View>
      <TextInput
        value={category.name}
        placeholder="Category Name"
        onChangeText={handleNameChange}
      />
      <View className="mb-2 pt-2">
        {category.attributes.map((attribute, index) => {
          return (
            <Attribute
              key={index}
              attribute={attribute}
              onChange={updateAttribute}
              onRemove={removeAttribute}
            />
          )
        })}
      </View>
      <View className="mb-3 p-3 flex-row bg-gray-100 rounded">
        <Text className="mr-3">Title field:</Text>
        <View className="flex-1">
          <Select
            key={
              category.attributes.find(
                (attribute) => attribute.id === category.titleAttribute
              )?.name ?? category.attributes[0]?.name
            }
            options={category.attributes.map((attribute) => ({
              value: attribute.id,
              label: attribute.name || "Unnamed Field",
            }))}
            pickerProps={{
              value: category.titleAttribute ?? category.attributes[0]?.id,
              onChange: updateCategoryTitleAttribute,
            }}
          />
        </View>
      </View>
      <Pressable onPress={createNewAttribute} className="px-5 py-2  bg-blue-50">
        <Text className="text-blue-600 font-medium uppercase text-xs text-center">
          Add new field
        </Text>
      </Pressable>
    </View>
  )
}

export default Category
