import { configureStore } from "@reduxjs/toolkit"
import { createRootReducer } from "./reducer"
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux"
import { persistStore } from "reduxjs-toolkit-persist"
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist"

export const createStore = () => {
  const store = configureStore({
    reducer: createRootReducer(),
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  })

  return { store, persistor: persistStore(store) }
}

export type Store = ReturnType<typeof createStore>["store"]
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<Store["getState"]>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = Store["dispatch"]
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
