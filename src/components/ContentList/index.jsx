import './index.css';

const ContentList = ({content}) => {
  return (
    <div>
    <ul>
      {/* <h1>{content.name}</h1> */}
      {content?.map((data) => (
        <>
          <li>
            <img key={data.name} alt={data.name} src={data.image}></img>
          </li>
        </>
      ))}
      {/* TODO: Display content */}
      {console.info(`Available content: ${content}`)}
    </ul>
    </div>
  );
};

export default ContentList;
