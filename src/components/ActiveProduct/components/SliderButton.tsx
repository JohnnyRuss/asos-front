function SliderButton({
  side,
  onClick,
}: {
  side: "LEFT" | "RIGHT";
  onClick: (e: React.MouseEvent) => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`absolute z-10 top-1/2 -translate-y-1/2 ${
        side === "LEFT" ? "left-3" : "right-3"
      }`}
    >
      {side === "LEFT" ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="52"
          height="52"
          fill="#000000"
          viewBox="0 0 256 256"
        >
          <path d="M165.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L91.31,128Z"></path>
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="52"
          height="52"
          fill="#000000"
          viewBox="0 0 256 256"
        >
          <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path>
        </svg>
      )}
    </button>
  );
}

export default SliderButton;
