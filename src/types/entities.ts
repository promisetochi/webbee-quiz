export enum AttributeType {
  DATE = "Date",
  TEXT = "TEXT",
  CHECKBOX = "CHECKBOX",
  NUMBER = "NUMBER",
}

export type Attribute = {
  id: string
  name: string
  type: AttributeType
}

export type Category = {
  id: string
  name: string
  attributes: Attribute[]
  titleAttribute: string
}

export type Machine = {
  id: string
  categoryId: string
  attributes: Record<string, string | number | boolean>
}
