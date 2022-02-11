import Header from './Header';
import ContentList from './ContentList';
import FetchMoreButton from './FetchMoreButton';
import {useLoadContent} from '../hooks/useLoadContent';
import './App.css';
import {useEffect} from 'react';

const App = () => {
  const [content, getContent, loadData, showMore] = useLoadContent();
  useEffect(() => {
    loadData();
  }, [loadData]);

  return (
    <div className="App">
      <Header onSearch={getContent} />
      <h1>Simple content list</h1>
      <ContentList content={content} />
      <FetchMoreButton showDetail={showMore}> Get more </FetchMoreButton>
    </div>
  );
};

export default App;
