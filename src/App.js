import React, { useState } from "react";
import "./App.css";
import * as XLSX from "xlsx";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
function App() {
  const [items, setItems] = useState([]);
  const [dataD, setData] = useState([]);
  document.addEventListener('DOMContentLoaded', function() {
    downloadFile();
  });

  const downloadFile = () => {
    // Lien du fichier
    const fileURL = 'https://www.snb.ch/en/aux/xlsx/current_exchange_rates.xlsx';
    fetch('https://cors-anywhere.herokuapp.com/' + fileURL , {
    method: 'GET',
    headers: {
      'Content-Type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    },
  })
  .then((response) => response.blob())
  .then((blob) => {
    // Create a blop
      readExcel(new Blob([blob]))
  });
  }
  
  const readExcel = (file) => {
    const promise = new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsArrayBuffer(file);

      fileReader.onload = (e) => {
        const bufferArray = e.target.result;

        const wb = XLSX.read(bufferArray, { type: "buffer", dateNF: 'dd,mm,yyyy'});

        const wsname = wb.SheetNames[0];

        const ws = wb.Sheets[wsname];
        // Range = Débute ligne 6 , Header donne un nom au différente colonne, dateNF définit le format de la date, raw utilise des chaines formatés
        const data = XLSX.utils.sheet_to_json(ws, {range: 6, header:["Date","EUR","USD","JPY","GBP"],dateNF: 'dd,mm,yyyy', raw:false});

        resolve(data);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });

    promise.then((d) => {
      setItems(d);
    });
  };
  const datetoData = (date) => {
    setStartDate(date);
    const str = '';
    // Formate la date en chaine pouvant être comparé avec celle dans items (+1 car renvois mois de 0 à 11)
    const datet = str.concat(date.getDate(),',',(date.getMonth()+1),',',date.getFullYear());
    setData(items.find((element) => {return element.Date === datet}));
  }

  const writeData = () => {
    if (!dataD){
      return 'Aucune donnée pour ce jour';
    }
    return <label>EUR: {dataD.EUR} - USD: {dataD.USD} - JPY: {dataD.JPY} - GBP: {dataD.GBP}</label>;
  }
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div>
      <input
        type="button"
        value="Reload"
        onClick={() => {
          downloadFile();
        }}
      />
      https://cors-anywhere.herokuapp.com/ accepter la démo si les données se charge pas
      <DatePicker id='date' selected={startDate} onChange={(date) => {datetoData(date)}}  dateFormat="dd,MM,yyyy" />
      {writeData()}
      
      <table className="table container">
        <thead>
          <tr>
            <th scope="col">Date</th>
            <th scope="col">EUR</th>
            <th scope="col">USD</th>
            <th scope="col">JPY</th>
            <th scope="col">GBP</th>
          </tr>
        </thead>
        <tbody>
          {items.map((d) => (
            <tr key={d.Date}>
              <th>{d.Date}</th>
              <td>{d.EUR}</td>
              <td>{d.USD}</td>
              <th>{d.JPY}</th>
              <td>{d.GBP}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;