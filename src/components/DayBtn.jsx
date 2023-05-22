function DayBtn(props) {
  return (
    <div className="DayBtn">
      {props.duration === 1 ? (
        <button id="one" onClick={() => props.onDayClick(1)}>
          Day 1
        </button>
      ) : props.duration === 2 ? (
        <>
          <button id="two" onClick={() => props.onDayClick(1)}>
            Day 1
          </button>
          |
          <button id="two" onClick={() => props.onDayClick(2)}>
            Day 2
          </button>
        </>
      ) : (
        <>
          <button id="three" onClick={() => props.onDayClick(1)}>
            Day 1
          </button>
          |
          <button id="three" onClick={() => props.onDayClick(2)}>
            Day 2
          </button>
          |
          <button id="three" onClick={() => props.onDayClick(3)}>
            Day 3
          </button>
        </>
      )}
    </div>
  );
}
export default DayBtn;
