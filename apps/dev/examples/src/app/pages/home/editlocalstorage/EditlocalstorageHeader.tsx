import { Header } from '@damianamodeo/ui/containers';
import { ChevronLeft } from '@damianamodeo/ui/icons';

type EditlocalstorageHeaderPageHeaderProps = {
  changeSubpage: (newSubpage: string, direction: '<' | '>') => void;
};

const EditlocalstorageHeader = ({ changeSubpage }: EditlocalstorageHeaderPageHeaderProps) => {

  //console.log('EditlocalstorageHeader', `${'variable'}`)
  return (
    <Header
      left={
        <div
          className={`text-[2rem] m-auto`}
          onClick={() => changeSubpage('Home', '>')}
        ><ChevronLeft /></div>
      }
      center={<div className={`text-center`}>Edit Local Storage</div>}
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

export default EditlocalstorageHeader;