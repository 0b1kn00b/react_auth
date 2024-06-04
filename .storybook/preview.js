import "../src/styles/tailwind.css";

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs:{
      toc: true
    },
    layout  : "fullscreen",
    darkMode: {
      stylePreview: true
    },
    tags: ['autodocs']
  },
};

export default preview;
