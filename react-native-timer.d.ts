declare module 'react-native-timer' {
    export function setTimeout(callback: () => void, duration: number): void;
    export function clearTimeout(): void;
    export function setInterval(callback: () => void, duration: number): void;
    export function clearInterval(): void;
  }