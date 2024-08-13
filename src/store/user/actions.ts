import { userStore } from "./slice";

export const setUser = (payload: string) =>
  userStore.setState(() => ({
    name: payload,
  }));
