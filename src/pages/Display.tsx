import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { CreateContext } from "../global/GlobalProvider";
import Typewriter from "typewriter-effect";
import { MdSearch } from "react-icons/md";
import { makeSearch } from "../api/API";

const Display = () => {
  const { numb, state, setState, setTruty, truty }: any =
    useContext(CreateContext);

  const [text, setText] = useState("");

  const [read, setRead] = useState([
    "CodeLab",
    "Start Coding",
    "Think and Code",
  ]);

  let mainRead = [...read];

  mainRead.pop();
  let newRead = mainRead;

  useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <Main>
      <Container>
        <Content>
          {truty
            ? state[numb - 1]?.description
            : state[state.length - 1]?.description}
        </Content>

        {/* <Typewriter
          options={{
            strings: newRead,
            autoStart: true,
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString(`${read[read.length - 1]}`)
              .callFunction(() => {
                console.log("String typed out!");
              })
              //   .deleteAll()
              .pauseFor(2500)
              .callFunction(() => {
                console.log("All strings were deleted");
              })
              .start();
          }}
        /> */}

        <InputHolder>
          <Input
            placeholder="make a search"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
          <Icon
            onClick={() => {
              makeSearch(text).then((res: any) => {
                setState([
                  ...state,
                  {
                    title: text,
                    description: res.result,
                    id: state.length + 1,
                  },
                ]);
                setTruty(false);
                setText("");
              });

              //   console.log(state);
            }}
          >
            <MdSearch />
          </Icon>
        </InputHolder>
      </Container>
    </Main>
  );
};

export default Display;

const Icon = styled.div`
  padding-right: 10px;
  font-size: 30px;
  margin-top: 5px;
  cursor: pointer;
`;

const Input = styled.input`
  outline: none;
  border: 0;
  font-size: 16px;
  text-transform: capitalize;
  flex: 1;

  &::placeholder {
    font-family: Poppins;
  }
`;

const InputHolder = styled.div`
  border: 1px solid silver;
  border-radius: 5px;
  padding: 3px;
  height: 40px;
  display: flex;
  align-items: center;
  margin-top: 10px;
  width: 100%;
  align-items: center;
`;

const Content = styled.div``;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
`;

const Main = styled.div`
  height: 98vh;
  display: flex;
  flex-direction: column;
  justify-content: end;
  width: 90%;
`;
