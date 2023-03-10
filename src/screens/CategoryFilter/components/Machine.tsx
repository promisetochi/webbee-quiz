import AttributesRenderer from "@/components/AttributesRenderer"
import { useMachinesCRUD } from "@/core/modules/machines/hooks"
import { Attribute, Machine as TMachine } from "@/types/entities"
import { X } from "phosphor-react-native"
import React from "react"
import { Pressable, Text, View } from "react-native"

type Props = {
  machine: TMachine
  fields: Attribute[]
  titleAttribute: string
}

const Machine = ({ machine, titleAttribute, fields }: Props) => {
  const { updateMachine, removeMachine } = useMachinesCRUD()
  const title = machine.attributes[titleAttribute]
  const attributes = fields.map((field) => ({
    ...field,
    machineId: machine.id,
    value: machine.attributes[field.id],
  }))

  const updateAttributeValue = (
    args: Pick<Attribute, "id"> & { changes: any }
  ) => {
    updateMachine({
      id: machine.id,
      changes: {
        attributes: {
          ...machine.attributes,
          [args.id]: args.changes,
        },
      },
    })
  }

  return (
    <View className="mb-3 p-3 bg-white rounded-md shadow-md">
      <View className="mb-3 flex-row">
        <Text className="flex-1 text-base">{title ?? "Untitled"}</Text>
        <Pressable onPress={() => removeMachine(machine.id)}>
          <X size={20} color="red" />
        </Pressable>
      </View>
      <AttributesRenderer
        attributes={attributes}
        onChange={updateAttributeValue}
      />
    </View>
  )
}

export default Machine
