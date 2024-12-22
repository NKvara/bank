import { useMatch } from 'react-router-dom';

const Temp = () => {
  const geer = useMatch('/:rikardo');

  console.log(geer);

  return <div>w</div>;
};

export default Temp;
