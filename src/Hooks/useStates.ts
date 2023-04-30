import { useState } from "react";

export default function useStates(defaulValue: number): [number, () => void] {
  const [state, setState] = useState(defaulValue);
  const updateState = () => setState(s => s + 1);
  return [state, updateState];
}
