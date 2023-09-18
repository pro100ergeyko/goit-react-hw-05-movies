import { Dna } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <div>
      <Dna
        visible={true}
        height="120"
        width="120"
        ariaLabel="dna-loading"
        align="center"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
    </div>
  );
};
