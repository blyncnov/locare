import { legacy_createStore as createStore } from "redux";
import rootReducer from "./reducers/rootReducers";

export const store = createStore(
  rootReducer
  //   typeof window !== "undefined"
  //     ? window.__REDUX_DEVTOOLS_EXTENSION__ &&
  //         window.__REDUX_DEVTOOLS_EXTENSION__()
  //     : null
);

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
