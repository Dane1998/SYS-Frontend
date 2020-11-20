import React, { useState, useEffect } from "react";
import facade from "../apiFacade";

export default function LoggedIn({ activeUser }) {
  const [dataFromServer, setDataFromServer] = useState("Loading...");

  useEffect(() => {
    let url2 = "";
    activeUser === "admin"
      ? (url2 = "/api/info/admin")
      : (url2 = "/api/info/user");
    facade.fetchData(url2).then((data) => setDataFromServer(data.msg));
  }, []);

  return (
    <div>
      <h2>Data Received from server</h2>
      <h3>{dataFromServer}</h3>
    </div>
  );
}
