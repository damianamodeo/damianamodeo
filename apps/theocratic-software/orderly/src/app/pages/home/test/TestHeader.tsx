import { Header } from '@damianamodeo/ui/containers';
import { ChevronLeft } from '@damianamodeo/ui/icons';

type TestHeaderPageHeaderProps = {
  changeSubpage: (newSubpage: string, direction: '<' | '>') => void;
};

const TestHeader = ({ changeSubpage }: TestHeaderPageHeaderProps) => {

  //console.log('TestHeader', `${'variable'}`)
  return (
    <Header
      left={
        <div
          className={`text-[2rem] m-auto`}
          onClick={() => changeSubpage('Home', '>')}
        ><ChevronLeft /></div>
      }
      center={<div className={``}>TestHeader</div>}
      right={
        <div
          className={`text-[2rem] m-auto`}
          onClick={() => {
            return;
          }}
        ></div>
      }
    />
  );
};

export default TestHeader;