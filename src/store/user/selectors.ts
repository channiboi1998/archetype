import { createSelectors } from "@/utils/zustand";
import { userStore } from "./slice";

const store = createSelectors(userStore).use;

export const selectUser = store.name();
