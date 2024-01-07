import theme from "../../../../theme/theme";

function schoolLogo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-school"
      width="100"
      height="100"
      viewBox="0 -1 24 24"
      strokeWidth="1.1"
      stroke={theme.palette.primary.tan}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M22 9l-10 -4l-10 4l10 4l10 -4v6" />
      <path d="M6 10.6v5.4a6 3 0 0 0 12 0v-5.4" />
    </svg>
  );
}

function lightBulbLogo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-bulb"
      width="100"
      height="100"
      viewBox="0 -1 24 24"
      strokeWidth="1.1"
      stroke={theme.palette.primary.tan}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7" />
      <path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3" />
      <path d="M9.7 17l4.6 0" />
    </svg>
  );
}

function heartLogo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-heart"
      width="100"
      height="100"
      viewBox="0 -3 24 24"
      strokeWidth=".75"
      stroke={theme.palette.primary.tan}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
    </svg>
  );
}

function smileLogo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-mood-smile"
      width="100"
      height="100"
      viewBox="0 -2 24 24"
      strokeWidth="1.1"
      stroke={theme.palette.primary.tan}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
      <path d="M9 10l.01 0" />
      <path d="M15 10l.01 0" />
      <path d="M9.5 15a3.5 3.5 0 0 0 5 0" />
    </svg>
  );
}

function humanLogo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-accessible"
      width="100"
      height="100"
      viewBox="0 -2 24 24"
      strokeWidth="1.1"
      stroke={theme.palette.primary.tan}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
      <path d="M10 16.5l2 -3l2 3m-2 -3v-2l3 -1m-6 0l3 1" />
      <circle cx="12" cy="7.5" r=".5" fill="currentColor" />
    </svg>
  );
}

const servicesProvidedListData = [
  {
    logo: schoolLogo(),
    title: "School",
    caption: `We provide at school services. We provide at school services`,
  },
  {
    logo: lightBulbLogo(),
    title: "Therapy",
    caption:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, dolores!",
  },
  {
    logo: heartLogo(),
    title: "Specialized Care",
    caption:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, ullam.",
  },
  {
    logo: smileLogo(),
    title: "Happiness",
    caption:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, laborum.",
  },
  {
    logo: humanLogo(),
    title: "Health",
    caption:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, eveniet!",
  },
];

export { servicesProvidedListData };
