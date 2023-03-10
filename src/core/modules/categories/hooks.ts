import { useAppDispatch } from "@/core/redux/store"
import { addOne, removeOne, updateOne } from "./slice"
import { Update, nanoid } from "@reduxjs/toolkit"
import { AttributeType, Category } from "@/types/entities"
import { useMemo } from "react"

export const useCategoriesCrud = () => {
  const dispatch = useAppDispatch()
  const actions = useMemo(
    () => ({
      createCategory: () => {
        const id = nanoid()
        dispatch(
          addOne({
            id: nanoid(),
            name: "New category",
            attributes: [
              {
                id,
                name: "",
                type: AttributeType.TEXT,
              },
            ],
            titleAttribute: id,
          })
        )
      },
      updateCategory: (payload: Update<Category>) =>
        dispatch(updateOne(payload)),
      removeCategory: (id: string) => dispatch(removeOne(id)),
    }),
    []
  )

  return actions
}
