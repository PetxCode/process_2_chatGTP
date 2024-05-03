import { IoCreateOutline } from "react-icons/io5";
import styled from "styled-components";
import { iProps } from "../layout/Layout";
import { FC, useContext, useState } from "react";
import { CreateContext } from "../global/GlobalProvider";

interface iProp {
  props?: iProps[];
}

const Sider: FC<iProp> = () => {
  const {
    state: props,
    setNumb,

    setTruty,
  }: any = useContext(CreateContext);

  return (
    <div>
      <Main>
        <Top>
          <Left>
            <Avatar />
            <Text>New Text</Text>
          </Left>
          <Icon>
            <IoCreateOutline />
          </Icon>
        </Top>

        <Show>
          {props.map((el: iProps) => (
            <Direction
              onClick={() => {
                setNumb(el.id);
                setTruty(true);
              }}
            >
              {el.title}
            </Direction>
          ))}
        </Show>
      </Main>
    </div>
  );
};

export default Sider;

const Direction = styled.div`
  padding: 10px;
  margin: 5px 0;
  border-radius: 5px;
  transition: all 360ms;

  &:hover {
    background-color: #ececec;
    cursor: pointer;
  }
`;

const Show = styled.div`
  margin-top: 20px;
`;

const Icon = styled.div``;

const Text = styled.div`
  color: rgba(0, 0, 0, 0.8);
`;

const Avatar = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  border: 1px solid silver;
`;

const Left = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  border-radius: 5px;
  transition: all 360ms;

  &:hover {
    background-color: #ececec;
    cursor: pointer;
  }
`;

const Main = styled.div`
  width: 250px;
  min-height: 100vh;
  border-right: 1px solid #ececec;
  margin-right: 5px;
  padding: 10px;
  background-color: #f9f9f9;
`;
