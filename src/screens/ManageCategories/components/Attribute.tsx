import Select from "@/components/Select"
import TextInput from "@/components/TextInput"
import attributeTypes from "@/lib/attributeTypes"
import { AttributeType, Attribute as TAttribute } from "@/types/entities"
import React from "react"
import { Pressable, View } from "react-native"
import { Trash } from "phosphor-react-native"

type Props = {
  attribute: TAttribute
  onChange(
    args: { changes: Partial<TAttribute> } & Pick<TAttribute, "id">
  ): void
  onRemove(id: string): void
}

const Attribute = ({ attribute, onChange, onRemove }: Props) => {
  return (
    <View className="w-full flex flex-row items-end">
      <View className="w-1/2 mr-2">
        <TextInput
          value={attribute.name}
          placeholder="Field"
          onChangeText={(name) =>
            onChange({ id: attribute.id, changes: { name } })
          }
        />
      </View>
      <View className="flex-1 mr-2">
        <Select
          options={attributeTypes.map((type) => type)}
          pickerProps={{
            placeholder: "Type",
            value: attribute.type,
            onChange: (type: AttributeType) =>
              onChange({ id: attribute.id, changes: { type } }),
            floatingPlaceholder: true,
          }}
        />
      </View>
      <Pressable
        onPress={() => onRemove(attribute.id)}
        className="h-8 w-8 inline-flex items-center justify-center border border-solid border-gray-100 rounded text-red-500"
      >
        <Trash size={16} color="red" />
      </Pressable>
    </View>
  )
}

export default Attribute
