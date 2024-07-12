"use client";

import { useUserStore } from "@/app/store/user";
import { UserStore } from "@/app/store/user";
import { useEffect } from "react";

export default function Home() {
  const user = useUserStore((state) => state.user);

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <main className="flex gap-2 m-4">
      <NameComponent name={user.full_name} />
      <InputNameComponent />
      <ButtonComponent />
    </main>
  );
}

const NameComponent = ({ name }: { name: UserStore["user"]["full_name"] }) => {
  return <h1>{name}</h1>;
};

const InputNameComponent = () => {
  const updateUser = useUserStore((state) => state.updateUser);
  const onChangeMethod = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateUser({ full_name: event.target.value });
  };
  return (
    <input
      type="text"
      placeholder="Enter your name"
      onChange={onChangeMethod}
    />
  );
};

const ButtonComponent = () => {
  return (
    <>
      <button onClick={logUser}>log user</button>
      <button onClick={setUser}>set user</button>
    </>
  );
};

const fetchUser = async () =>
  await useUserStore.getState().fetchUser({ full_name: "fetch lake" });

const logUser = () => {
  const user = useUserStore.getState().user.full_name;
  console.log(user);
};

const setUser = () => {
  useUserStore.setState({ user: { full_name: "set lake" } });
};
