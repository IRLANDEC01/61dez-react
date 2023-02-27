import React, { useState } from "react";
import { Container } from "react-bootstrap";
import NavBar from "./components/UI/NavBar";
import { AudListContext } from "./context";
import Dez from "./Dez";

const auds = [
  {
    name: 213,
    notation: ''
  },
  {
    name: 216,
    notation: ''
  },
  {
    name: 219,
    notation: ''
  },
  {
    name: 221,
    notation: ''
  },
  {
    name: 223,
    notation: ''
  },
  {
    name: 231,
    notation: ''
  },
  {
    name: 225,
    notation: ''
  },
  {
    name: 314,
    notation: '(Буфет)'
  }
]

const cadetCourses=[2,3,4,5]
const cadetGroups=[
  {
    name:611/11,
    course:2
  },
   {
    name:611/12,
    course:2
  },
   {
    name:611/12,
    course:2
  },
  
]

export const App = () => {
  const [audList, setAudList] = useState(auds)
  return (
    <Container fluid>
      <AudListContext.Provider value={{
        audList,
        setAudList
      }} >
        <NavBar></NavBar>
        <Dez></Dez>
      </AudListContext.Provider>
    </Container>
  );
}


export default App