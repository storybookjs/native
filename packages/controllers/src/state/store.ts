import { createStore, applyMiddleware, AnyAction } from "redux";
import thunkMiddleware from "redux-thunk";
import type { ThunkAction } from "redux-thunk";
import reducer from "./reducer";

const enhancer = applyMiddleware(thunkMiddleware);

const store = createStore(reducer, enhancer);
export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type ThunkActionHandler = ThunkAction<
    void,
    RootState,
    unknown,
    AnyAction
>;

export const dispatchThunk = (thunk: ThunkActionHandler) => {
    // @ts-ignore
    return store.dispatch(thunk);
};
