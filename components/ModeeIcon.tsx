interface LogoProps {
  width: string;
  height: string;
}

export default function MoodeeIcon({ width, height }: LogoProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 212 211"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="1" width="50" height="50" rx="5" fill="#78D980" />
      <rect x="1" y="54" width="50" height="50" rx="5" fill="#FFB661" />
      <rect x="55" y="54" width="50" height="50" rx="5" fill="#FF7F62" />
      <rect x="55" width="50" height="50" rx="5" fill="#038C65" />
      <rect
        x="108"
        y="104"
        width="50"
        height="50"
        rx="5"
        transform="rotate(-90 108 104)"
        fill="#78D980"
      />
      <rect
        x="162"
        y="104"
        width="50"
        height="50"
        rx="5"
        transform="rotate(-90 162 104)"
        fill="#FFB661"
      />
      <rect
        x="162"
        y="50"
        width="50"
        height="50"
        rx="5"
        transform="rotate(-90 162 50)"
        fill="#FF7F62"
      />
      <rect
        x="108"
        y="50"
        width="50"
        height="50"
        rx="5"
        transform="rotate(-90 108 50)"
        fill="#038C65"
      />
      <rect
        x="104"
        y="211"
        width="50"
        height="50"
        rx="5"
        transform="rotate(-180 104 211)"
        fill="#78D980"
      />
      <rect
        x="104"
        y="157"
        width="50"
        height="50"
        rx="5"
        transform="rotate(-180 104 157)"
        fill="#FFB661"
      />
      <rect
        x="50"
        y="157"
        width="50"
        height="50"
        rx="5"
        transform="rotate(-180 50 157)"
        fill="#FF7F62"
      />
      <rect
        x="50"
        y="211"
        width="50"
        height="50"
        rx="5"
        transform="rotate(-180 50 211)"
        fill="#038C65"
      />
      <rect
        x="211"
        y="107"
        width="50"
        height="50"
        rx="5"
        transform="rotate(90 211 107)"
        fill="#78D980"
      />
      <rect
        x="157"
        y="107"
        width="50"
        height="50"
        rx="5"
        transform="rotate(90 157 107)"
        fill="#FFB661"
      />
      <rect
        x="157"
        y="161"
        width="50"
        height="50"
        rx="5"
        transform="rotate(90 157 161)"
        fill="#FF7F62"
      />
      <rect
        x="211"
        y="161"
        width="50"
        height="50"
        rx="5"
        transform="rotate(90 211 161)"
        fill="#038C65"
      />
    </svg>
  );
}
