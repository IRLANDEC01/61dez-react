import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter } from "react-router-dom";
import axiosInstance from "./axios";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/UI/NavBar";

import { AudListContext } from "./context";

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
    notation: 'Буфет'
  }
]

const cadetCourses = [2, 3, 4, 5]


export const App = () => {
  const [audList, setAudList] = useState(auds)

  useEffect(() => {
    axiosInstance.get('/getAuds ')
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      })
  }, [])

  return (
    <Container fluid>
      <AudListContext.Provider value={{
        audList,
        setAudList
      }} >
        <BrowserRouter>

          <NavBar></NavBar>
          <AppRouter />
        </BrowserRouter>
      </AudListContext.Provider>
    </Container>
  );
}


export default App