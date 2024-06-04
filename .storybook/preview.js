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
    layout  : "fullscreen",
    darkMode: {
      stylePreview: true
    }
  },
};

export default preview;
