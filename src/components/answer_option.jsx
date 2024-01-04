const AnswerOption = ({ option, selectedOption, onOptionChange, optionValues }) => {
  // const optionValues = {
  //   "Baik": 4,
  //   "Lumayan": 3,
  //   "Buruk": 2,
  //   "Sangat buruk": 1,
  // };

  // const handleOptionChange = () => {
  //   onOptionChange(optionValues[option]);
  // }

  return (
    <div>
      <input
        type="radio"
        id={option}
        name="options"
        value={optionValues[option]}
        checked={selectedOption === optionValues[option]}
        // onChange={handleOptionChange}
        onChange={() => onOptionChange(optionValues[option])}
      />
      <label htmlFor={option}>{option}</label>
    </div>
  );
};

export default AnswerOption;
