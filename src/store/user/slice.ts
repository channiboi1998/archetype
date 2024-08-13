import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { UserState } from "./types";

const name = "[USER]";

export const userStore = create<UserState>()(
  persist(
    immer(
      devtools(
        (_) => ({
          name: null,
        }),
        { name }
      )
    ),
    {
      name,
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
