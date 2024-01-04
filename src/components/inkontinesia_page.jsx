import { useNavigate } from "react-router-dom";
import Button from "./button";
import { useState } from "react";
import AnswerOption from "./answer_option";

const InkontinesiaPage = () => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (value) => {
    console.log(value);
    setSelectedOption(value);
    localStorage.setItem("inkontinesia", value.toString());
  };

  const optionValues = {
    "Tidak ngompol": 4,
    "Kadang-kadang": 3,
    "Sering inkontinesia urine": 2,
    "Sering inkontinesia alive urine": 1,
  };

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <h2 className="text-center py-4">Bagaimana inkontinesia pasien ?</h2>
      <div className="w-1/6 justify-start">
        <AnswerOption
          option="Tidak ngompol"
          selectedOption={selectedOption}
          onOptionChange={handleOptionChange}
          optionValues={optionValues}
        />
      </div>
      <div className="w-1/6 justify-start">
        <AnswerOption
          option="Kadang-kadang"
          selectedOption={selectedOption}
          onOptionChange={handleOptionChange}
          optionValues={optionValues}
        />
      </div>
      <div className="w-1/6 justify-start">
        <AnswerOption
          option="Sering inkontinesia urine"
          selectedOption={selectedOption}
          onOptionChange={handleOptionChange}
          optionValues={optionValues}
        />
      </div>
      <div className="w-1/6 justify-start">
        <AnswerOption
          option="Sering inkontinesia alive urine"
          selectedOption={selectedOption}
          onOptionChange={handleOptionChange}
          optionValues={optionValues}
        />
      </div>
      <div className="mt-4">
        <div className="flex flex-row">
          <Button onClick={() => navigate("/aktivitas")}>Kembali</Button>
          <div className="px-1" /> 
          <Button onClick={() => navigate("/result", { state: { inkontinesia: optionValues } })}>Selanjutnya</Button>
        </div>
      </div>
    </div>
  );
};

export default InkontinesiaPage;
