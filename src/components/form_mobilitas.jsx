import { useNavigate } from "react-router-dom";
import Button from "./button";
import { useState } from "react";
import AnswerOption from "./answer_option";

const FormMobilitas = () => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (value) => {
    console.log(value);
    setSelectedOption(value);
    localStorage.setItem("mobilitas", value.toString());
  };

  const optionValues = {
    "Bergerak bebas": 4,
    "Sedikit terbatas": 3,
    "Sangat terbatas": 2,
    "Tidak bisa bergerak": 1,
  };

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <h2 className="text-center py-4">Bagaimana mobilitas pasien ?</h2>
      <div className="w-1/6 justify-start">
        <AnswerOption
          option="Bergerak bebas"
          selectedOption={selectedOption}
          onOptionChange={handleOptionChange}
          optionValues={optionValues}
        />
      </div>
      <div className="w-1/6 justify-start">
        <AnswerOption
          option="Sedikit terbatas"
          selectedOption={selectedOption}
          onOptionChange={handleOptionChange}
          optionValues={optionValues}
        />
      </div>
      <div className="w-1/6 justify-start">
        <AnswerOption
          option="Sangat terbatas"
          selectedOption={selectedOption}
          onOptionChange={handleOptionChange}
          optionValues={optionValues}
        />
      </div>
      <div className="w-1/6 justify-start">
        <AnswerOption
          option="Tidak bisa bergerak"
          selectedOption={selectedOption}
          onOptionChange={handleOptionChange}
          optionValues={optionValues}
        />
      </div>
      <div className="mt-4">
        <div className="flex flex-row">
          <Button onClick={() => navigate("/kesadaran")}>Kembali</Button>
          <div className="px-1" /> 
          <Button onClick={() => navigate("/Aktivitas", { state: { mobilitas: optionValues } })}>Selanjutnya</Button>
        </div>
      </div>
    </div>
  );
};

export default FormMobilitas;
