import { useState } from "react";

interface UseTabIndexProps {
  tabRoutes: any[];
  route?: any;
}

export const useTabIndex = ({ tabRoutes, route }: UseTabIndexProps) => {
  const [index, setIndex] = useState(0);

  const setTabIndex = (nextIndex: number) => {
    if (index === nextIndex) return;
    return setIndex(nextIndex);
  };

  return {
    index,
    setTabIndex,
  };
};
