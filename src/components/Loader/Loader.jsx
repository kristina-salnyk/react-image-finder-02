import { Loader as LoaderContainer } from './Loader.styled';
import { RotatingLines } from 'react-loader-spinner';

const Loader = () => {
  return (
    <LoaderContainer>
      <RotatingLines
        strokeColor="#3f51b5"
        strokeWidth="5"
        animationDuration="0.75"
        width="15%"
        visible={true}
      />
    </LoaderContainer>
  );
};

export default Loader;
