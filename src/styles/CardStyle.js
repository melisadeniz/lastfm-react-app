import styled from "styled-components";

export const CardStyle = styled.div`
  background-color: ${(props) =>
  props.theme === "dark" ? "#131414" : "white"};
  display: flex;
  width: 300px;
  height: 100px;
  flex-wrap: wrap;
  justify-content: space-around;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  text-align: center;
  padding: 5px;
  margin: 15px 10px;
  font-family: "Montserrat", sans-serif;
  `
