import {useCallback, useState} from 'react';

export const useLoadContent = () => {
  const [imgList, setImgList] = useState([]);
  const [inputValue, setInputValue] = useState([]);
  const [page, setPage] = useState(2);

  const loadData = useCallback(async () => {
    try {
      const response = await fetch(`https://rickandmortyapi.com/api/character`);
      const json = await response.json();
      const data = json.results;
      setImgList(data);
    } catch (error) {
      console.error('Ошибка:', error);
    }
  }, []);

  const getContent = useCallback(async (value = 'rick') => {
    setPage(2);
    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/?name=${value}`,
      );
      const json = await response.json();
      const data = json.results;
      const preLoadData = data.slice(0, 10);
      setInputValue(value);
      setImgList(preLoadData);
    } catch (error) {}
  }, []);

  // TODO: Put fetchMore method here
  const fetchMore = useCallback(async () => {
    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/?name=${inputValue}&page=${page}`,
      );
      const json = await response.json();
      const extraData = json.results;

      setPage((prev) => prev + 1);
      if (extraData !== null && extraData !== undefined) {
        setImgList([...imgList, ...extraData]);
      } else {
        setImgList([...imgList]);
      }
    } catch (error) {
      console.error('Ошибка:', error);
    }
  }, [imgList, inputValue, page]);

  return [imgList, getContent, loadData, fetchMore];
};
