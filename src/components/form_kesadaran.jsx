import { useNavigate } from "react-router-dom";
import Button from "./button";
import { useState } from "react";
import AnswerOption from "./answer_option";

const FormKesadaran = () => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (value) => {
    console.log(value);
    setSelectedOption(value);
    localStorage.setItem("kesadaran", value.toString());
  };

  const optionValues = {
    "Kompos mentis": 4,
    "Apatis": 3,
    "Konfus soporis": 2,
    "Stupur koma": 1,
  };

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <h2 className="text-center py-4">Bagaimana kesadaran pasien ?</h2>
      <div className="w-1/6 justify-start">
        <AnswerOption
          option="Kompos mentis"
          selectedOption={selectedOption}
          onOptionChange={handleOptionChange}
          optionValues={optionValues}
        />
      </div>
      <div className="w-1/6 justify-start">
        <AnswerOption
          option="Apatis"
          selectedOption={selectedOption}
          onOptionChange={handleOptionChange}
          optionValues={optionValues}
        />
      </div>
      <div className="w-1/6 justify-start">
        <AnswerOption
          option="Konfus soporis"
          selectedOption={selectedOption}
          onOptionChange={handleOptionChange}
          optionValues={optionValues}
        />
      </div>
      <div className="w-1/6 justify-start">
        <AnswerOption
          option="Stupur koma"
          selectedOption={selectedOption}
          onOptionChange={handleOptionChange}
          optionValues={optionValues}
        />
      </div>
      <div className="mt-4">
        <div className="flex flex-row">
          <Button onClick={() => navigate("/kondisi-fisik")}>Kembali</Button>
          <div className="px-1" /> 
          <Button onClick={() => navigate("/mobilitas", { state: { kesadaran: optionValues } })}>Selanjutnya</Button>
        </div>
      </div>
    </div>
  );
};

export default FormKesadaran;
