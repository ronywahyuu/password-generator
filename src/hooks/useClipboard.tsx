export default function useClipboard(text: string) {
  if (!navigator.clipboard) {
    return;
  }

  return navigator.clipboard.writeText(text);
}
