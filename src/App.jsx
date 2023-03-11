import React, { useEffect, useMemo, useState } from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter } from "react-router-dom";
import APIAuds from "./API/auds";
import APIEventKeys from "./API/eventKeys";
import APIGroups from "./API/groups";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/UI/NavBar";
import { AudsContext } from "./context";
import { GroupsContext } from "./context";
import { EventKeysContext } from "./context";

export const App = () => {
  const [auds, setAuds] = useState([])
  const [groups, setGroups] = useState([])
  const [eventKeys, setEventKeys] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      setAuds(await APIAuds.getAuds())
    }
    fetchData();
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      setGroups(await APIGroups.getGroups())
    }
    fetchData();
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      setEventKeys(await APIEventKeys.getEventKeys())
    }
    fetchData();
  }, [])
  console.log('render APP');
  return (
    <Container fluid>
      <AudsContext.Provider
        value={{
          auds: auds,
          setAuds: setAuds
        }} >
        <GroupsContext.Provider
          value={{
            groups: groups,
            setGroups: setGroups
          }}
        >
          <EventKeysContext.Provider
            value={{
              eventKeys: eventKeys,
              setEventKeys: setEventKeys
            }}
          >
            <BrowserRouter>
              <NavBar></NavBar>
              <AppRouter />
            </BrowserRouter>
          </EventKeysContext.Provider>
        </GroupsContext.Provider>
      </AudsContext.Provider>
    </Container>
  );
}


export default App