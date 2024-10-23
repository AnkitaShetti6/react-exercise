import styled from "styled-components";

export const ContentItem = styled.div`
  padding-left: 50px;

  .container {
    display: flex;
    > button {
      margin-left: 5px;
      margin-top: 10px;
      border: 1px solid #ccc;
      background: #fff;
      border-radius: 10px;
      width: fit-content;
      height: fit-content;
      padding: 8px;
    }
  }

  .container > div {
    margin: 10px;
  }
`;

export const SearchBar = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 10px;
  width: 70%;
  border-radius: 25px;
  border: 1px solid #dddddd;
  > input {
    font-size: 18px;
    border: none;
    outline: none;
    &::placeholder {
      font-size: 14px;
    }
  }
  > button {
    color: #0090e3;
    background-color: #fff;
    border: none;
  }
`;

export const DropDowComponent = styled.div`
  margin-left: 50px;
  position: relative;
  border-radius: 10px;
  padding: 5px;
  border: 1px solid #dddddd;
  > button {
    width: fit-content;
    border: none;
    background: transparent;
  }
`;

export const DropDowComponentItem = styled.div`
  border: 1px solid #ccc;
  background: #fff;
  position: absolute;
  margin-top: 10px;
  padding: 10px;
  border-radius: 10px;
  width: max-content;
  display: flex;
  flex-direction: column;
`;

export const PetComponent = styled.div`
  margin-left: 10px;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  .pet {
    margin: 5px;
    text-align: center;
    > button {
      width: 30%;
      color: white;
      background-color: #285dab;
      border: none;
      border-radius: 30px;
      padding: 10px;
    }
  }
`;
