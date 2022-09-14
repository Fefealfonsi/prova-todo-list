import React, { useState, useEffect } from "react";
import axios from "axios";

export function useRequestData(url, estadoInicial, token) {

  const [data, setData] = useState(estadoInicial);
  
  const auth = { headers: { Authorization: 'Bearer ' + token } }

    useEffect(() => {
     axios
      .get(url, auth)
      .then((response) => {
        setData(response.data);
      })
      .catch((erro) => {
        alert(erro.message);
      });
  }, [url]);

  return data;
}
