import { create } from "zustand";

export type UserStore = {
  user: {
    full_name: string;
  };
  updateUser: (newUser: UserStore["user"]) => void;
  fetchUser: (newUser: UserStore["user"]) => Promise<undefined>;
};

export const useUserStore = create<UserStore>((set) => ({
  user: {
    full_name: "lake hong",
  },

  updateUser: (newUser: UserStore["user"]) =>
    set((state) => ({ user: { ...state.user, ...newUser } })),

  fetchUser: async (newUser: UserStore["user"]) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    set((state) => ({ user: { ...state.user, ...newUser } }));
  },
}));
