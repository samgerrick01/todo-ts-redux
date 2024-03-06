import { configureStore } from "@reduxjs/toolkit";
import { todoSlice } from "./features/todoSlice";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
// ...

export const store = configureStore({
  reducer: {
    todos: todoSlice.reducer,
  },
});

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;
