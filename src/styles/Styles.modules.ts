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

export const PetsDirectoryComponent = styled.div`
  display: flex;
  align-items: center;
  border-radius: 10px;
  background-color: #285dab;
  justify-content: space-between;
  margin-left: 100px;
  margin-right: 100px;
  .image {
    width: 60%;
    border-bottom-left-radius: 10px;
    border-top-left-radius: 10px;
  }
  .directory {
    margin-left: 10px;
    margin-right: 10px;
    margin-bottom: 50px;
    .title {
      color: white;
      font-size: 22px;
      margin-bottom: 10px;
    }
    .description {
      color: white;
      font-size: 16px;
      margin-bottom: 20px;
    }
    > button {
      width: 30%;
      color: black;
      background-color: #f0f0f0;
      border: none;
      border-radius: 30px;
      padding-left: 10px;
      padding-right: 10px;
      padding-top: 2px;
      padding-bottom: 2px;
    }
  }
`;

export const CategoryComponent = styled.div`
  display: flex;
  margin-top: 20px;
  .category {
    justify-content: space-around;
    align-items: center;
    flex-direction: row;
    padding: 10px;
    .imageContainer {
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 10px;
      width: 100px;
      height: 75px;
      background: #f0f0f0;
      position: relative;
      .image {
        width: 50px;
        height: 50px;
        margin-bottom: 50px;
      }
    }
    .title {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 16px;
    }
  }
`;

export const AvailablePets = styled.div`
  margin-left: 10px;
  margin-top: 20px;
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

export const PetDetail = styled.div`
   height: 100%; 
  display: flex;           
  flex-direction: column;  
  align-items: flex-start;
`;
