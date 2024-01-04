import { useNavigate } from "react-router-dom";
import Button from "./button";
import { useState } from "react";
import AnswerOption from "./answer_option";

const AktivitasPage = () => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (value) => {
    console.log(value);
    setSelectedOption(value);
    localStorage.setItem("aktivitas", value.toString());
  };

  const optionValues = {
    "Dapat berpindah": 4,
    "Berjalan dengan bantuan": 3,
    "Terbatas di kursi": 2,
    "Terbatas di tempat tidur": 1,
  };

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <h2 className="text-center py-4">Bagaimana pasien dapat beraktivitas ?</h2>
      <div className="w-1/6 justify-start">
        <AnswerOption
          option="Dapat berpindah"
          selectedOption={selectedOption}
          onOptionChange={handleOptionChange}
          optionValues={optionValues}
        />
      </div>
      <div className="w-1/6 justify-start">
        <AnswerOption
          option="Berjalan dengan bantuan"
          selectedOption={selectedOption}
          onOptionChange={handleOptionChange}
          optionValues={optionValues}
        />
      </div>
      <div className="w-1/6 justify-start">
        <AnswerOption
          option="Terbatas di kursi"
          selectedOption={selectedOption}
          onOptionChange={handleOptionChange}
          optionValues={optionValues}
        />
      </div>
      <div className="w-1/6 justify-start">
        <AnswerOption
          option="Terbatas di tempat tidur"
          selectedOption={selectedOption}
          onOptionChange={handleOptionChange}
          optionValues={optionValues}
        />
      </div>
      <div className="mt-4">
        <div className="flex flex-row">
          <Button onClick={() => navigate("/mobilitas")}>Kembali</Button>
          <div className="px-1" /> 
          <Button onClick={() => navigate("/inkontinesia", { state: { aktivitas: optionValues } })}>Selanjutnya</Button>
        </div>
      </div>
    </div>
  );
};

export default AktivitasPage;
