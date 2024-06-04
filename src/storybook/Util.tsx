import { useDarkMode } from 'storybook-dark-mode';
///@ts-ignore
export function default_decorator(Story){
  return <div data-theme={useDarkMode() ? "dark" : "light"}  className=" h-dvh w- grid place-content-center">
    <Story />
  </div>
}
