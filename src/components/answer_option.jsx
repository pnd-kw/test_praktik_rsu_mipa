const AnswerOption = ({ option, selectedOption, onOptionChange, optionValues }) => {
  
  return (
    <div>
      <input
        type="radio"
        id={option}
        name="options"
        value={optionValues[option]}
        checked={selectedOption === optionValues[option]}
        onChange={() => onOptionChange(optionValues[option])}
      />
      <label htmlFor={option}>{option}</label>
    </div>
  );
};

export default AnswerOption;
