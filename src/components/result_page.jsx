import { useState, useEffect } from "react";
import { fetchDataFromAPI, postDataToAPI } from "../utils/api";
import Button from "./button";

const ResultPage = () => {
  const kondisiFisik = localStorage.getItem("kondisiFisik");
  const kesadaran = localStorage.getItem("kesadaran");
  const mobilitas = localStorage.getItem("mobilitas");
  const aktivitas = localStorage.getItem("aktivitas");
  const inkontinesia = localStorage.getItem("inkontinesia");

  const total =
    parseInt(kondisiFisik || 0) +
    parseInt(kesadaran || 0) +
    parseInt(mobilitas || 0) +
    parseInt(aktivitas || 0) +
    parseInt(inkontinesia || 0);

  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await fetchDataFromAPI();
        setData(result.data || []);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    getData();
  }, []);

  const handlePostData = async () => {
    const postData = {
      medis_id: "1023000000042023110349",
      kondisi_fisik_umum: parseInt(kondisiFisik || 0),
      kesadaran: parseInt(kesadaran || 0),
      mobilitas: parseInt(mobilitas || 0),
      aktivitas: parseInt(aktivitas || 0),
      inkontinesia: parseInt(inkontinesia || 0),
      user_id: 9,
    };

    try {
      const result = await postDataToAPI(postData);
      console.log("Post successful:", result);
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <div className="py-4">
        <p>Kondisi Fisik: {kondisiFisik}</p>
        <p>Kesadaran: {kesadaran}</p>
        <p>Mobilitas: {mobilitas}</p>
        <p>Aktivitas: {aktivitas}</p>
        <p>Inkontinesia: {inkontinesia}</p>
        <p>Total: {total}</p>
        <Button onClick={handlePostData}>Kirim</Button>
        <div className="py-8" />
      </div>
      <div>
        <p className="flex items-center justify-center py-4">
          Daftar Poliklinik
        </p>
        <ul className="flex flex-row">
          {data.map((item, index) => (
            <li className="px-4" key={index} name={item.name}>
              <p className="bg-slate-200">{item.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ResultPage;
