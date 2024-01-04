import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Button from "./button";
import AnswerOption from "./answer_option";

const KondisiFisikPage = () => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (value) => {
    console.log(value);
    setSelectedOption(value);
    localStorage.setItem("kondisiFisik", value.toString());
  };

  const optionValues = {
    "Baik": 4,
    "Lumayan": 3,
    "Buruk": 2,
    "Sangat buruk": 1,
  };

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <h2 className="text-center py-4">Bagaimana kondisi fisik pasien ?</h2>
      <div className="w-1/6 justify-start">
        <AnswerOption
          option="Baik"
          selectedOption={selectedOption}
          onOptionChange={handleOptionChange}
          optionValues={optionValues}
        />
      </div>
      <div className="w-1/6 justify-start">
        <AnswerOption
          option="Lumayan"
          selectedOption={selectedOption}
          onOptionChange={handleOptionChange}
          optionValues={optionValues}
        />
      </div>
      <div className="w-1/6 justify-start">
        <AnswerOption
          option="Buruk"
          selectedOption={selectedOption}
          onOptionChange={handleOptionChange}
          optionValues={optionValues}
        />
      </div>
      <div className="w-1/6 justify-start">
        <AnswerOption
          option="Sangat buruk"
          selectedOption={selectedOption}
          onOptionChange={handleOptionChange}
          optionValues={optionValues}
        />
      </div>
      <div className="mt-4">
        <Button
          onClick={() =>
            navigate("/kesadaran", { state: { kondisiFisik: selectedOption } })
          }
        >
          Selanjutnya
        </Button>
      </div>
    </div>
  );
};

export default KondisiFisikPage;
