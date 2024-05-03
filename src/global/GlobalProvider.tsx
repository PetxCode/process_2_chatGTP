import { FC, PropsWithChildren, createContext, useState } from "react";
import { iProps } from "../layout/Layout";

export const CreateContext = createContext([] as iProps[]);

export const GlobalProvider: FC<PropsWithChildren> = ({ children }) => {
  const data: Array<iProps> = [
    {
      id: 1,
      title: "search 1",
      description: "description 1",
    },
    {
      id: 2,
      title: "search 2",
      description: "description 2",
    },
    {
      id: 3,
      title: "search 3",
      description: "description 3",
    },
    {
      id: 4,
      title: "search 4",
      description: "description 4",
    },
  ];
  const [state, setState] = useState<Array<iProps>>(data);
  const [numb, setNumb] = useState<number>(1);
  const [truty, setTruty] = useState<boolean>(false);

  return (
    <CreateContext.Provider
      value={{ state, setState, numb, setNumb, truty, setTruty }}
    >
      {children}
    </CreateContext.Provider>
  );
};
