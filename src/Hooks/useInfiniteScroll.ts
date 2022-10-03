import { useState, useEffect, Dispatch, SetStateAction } from 'react';

const useInfiniteScroll = (
  callback: () => void
): [boolean, Dispatch<SetStateAction<boolean>>] => {
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', isScrolling);
    return () => window.removeEventListener('scroll', isScrolling);
  }, []);

  useEffect(() => {
    if (!isFetching) return;
    debounce(callback);
  }, [isFetching]);

  function isScrolling() {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight ||
      isFetching
    )
      return;
    setIsFetching(true);
  }
  return [isFetching, setIsFetching];
};

export default useInfiniteScroll;
function debounce(func: () => void, timeout: number = 300) {
  let timer;
  if (timer) {
    clearTimeout(timer);
  }
  timer = setTimeout(() => {
    func();
  }, timeout);
}
