import { Header } from '@damianamodeo/ui/containers';
import { ChevronLeft } from '@damianamodeo/ui/icons';

type HomeHeaderPageHeaderProps = {
  changeSubpage: (newSubpage: string, direction: '<' | '>') => void;
};

const HomeHeader = ({ changeSubpage }: HomeHeaderPageHeaderProps) => {
  // console.log('HomeHeader', `${null}`);
  return (
    <Header
      left={
        <div
          className={`text-[2rem] m-auto`}
          onClick={() => changeSubpage('Test', '>')}
        >
          <ChevronLeft  color="primary" />
        </div>
      }
      center={<div className={``}>Orderly</div>}
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

export default HomeHeader;
