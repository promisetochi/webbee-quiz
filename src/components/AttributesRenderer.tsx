import { Attribute, AttributeType } from "@/types/entities"
import React, { FunctionComponent } from "react"
import TextInput from "./TextInput"
import { Checkbox, DateTimePicker, NumberInputData } from "react-native-ui-lib"
import { Switch, View } from "react-native"
import NumberInput from "./NumberInput"

const attributesMap: Partial<
  Record<
    AttributeType,
    FunctionComponent<
      Attribute & {
        onChange(changes: any): void
        value: any
      }
    >
  >
> = {
  [AttributeType.TEXT]: ({ name, onChange, value }) => (
    <TextInput placeholder={name} onChangeText={onChange} value={value} />
  ),
  [AttributeType.DATE]: ({ name, onChange, value }) => (
    <DateTimePicker
      placeholder={name}
      floatingPlaceholder
      migrateTextField
      renderInput={(props: any) => <TextInput {...props} />}
      onChange={(val: Date) => {
        onChange(val.toISOString())
      }}
      value={value ? new Date(value) : undefined}
    />
  ),
  [AttributeType.CHECKBOX]: ({ name, onChange, value }) => (
    <Checkbox label={name} value={!!value} onValueChange={onChange} />
  ),
  [AttributeType.NUMBER]: ({ name, onChange, value }) => (
    <NumberInput
      floatingPlaceholder
      placeholder={name}
      onChangeNumber={(val: NumberInputData) => {
        if (val.type === "error") return
        if (val.type === "empty") onChange(0)
        if (val.type === "valid") onChange(val.number)
      }}
      initialNumber={value}
    />
  ),
}

type Props = {
  attributes: (Attribute & { value: any })[]
  onChange(args: Pick<Attribute, "id"> & { changes: any }): void
}

const AttributesRenderer = ({ attributes, onChange }: Props) => {
  return (
    <>
      {attributes.map((attribute, index) => {
        const Comp = attributesMap[attribute.type]
        if (Comp)
          return (
            <View key={index} className="mb-2">
              <Comp
                {...attribute}
                onChange={(changes) => onChange({ id: attribute.id, changes })}
              />
            </View>
          )

        return null
      })}
    </>
  )
}

export default AttributesRenderer
