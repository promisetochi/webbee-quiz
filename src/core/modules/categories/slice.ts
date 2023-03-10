import { RootState } from "@/core/redux/store"
import { Category } from "@/types/entities"
import { createEntityAdapter, createSlice } from "@reduxjs/toolkit"

const entity = createEntityAdapter<Category>()
export const {
  reducer: categoriesReducer,
  actions: { addOne, updateOne, removeOne },
} = createSlice({
  name: "categories",
  initialState: entity.getInitialState(),
  reducers: {
    addOne: entity.addOne,
    updateOne: entity.updateOne,
    removeOne: entity.removeOne,
  },
  extraReducers(builder) {},
})

export const {
  selectAll: selectAllCategories,
  selectById: selectCategoryById,
} = entity.getSelectors((state: RootState) => state.categories)
