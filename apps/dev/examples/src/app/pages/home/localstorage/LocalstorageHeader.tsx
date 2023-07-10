import { Header } from '@damianamodeo/ui/containers';
import { ChevronLeft } from '@damianamodeo/ui/icons';

type LocalStorageHeadertPageHeaderProps = {
  changeSubpage: (newSubpage: string, direction: '<' | '>') => void;
};

const LocalStorageHeadert = ({
  changeSubpage,
}: LocalStorageHeadertPageHeaderProps) => {
  //console.log('LocalStorageHeadert', `${'variable'}`)
  return (
    <Header
      left={
        <div
          className={`text-[2rem] m-auto`}
          onClick={() => changeSubpage('Home', '>')}
        >
          <ChevronLeft />
        </div>
      }
      center={<div className={`text-center`}>LocalStorageHeadert</div>}
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

export default LocalStorageHeadert;
