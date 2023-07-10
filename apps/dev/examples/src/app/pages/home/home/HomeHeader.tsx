import { Header } from '@damianamodeo/ui/containers';
import { ChevronLeft } from '@damianamodeo/ui/icons';

type HomeHeaderPageHeaderProps = {
  changeSubpage: (newSubpage: string, direction: '<' | '>') => void;
};

const HomeHeader = ({ changeSubpage }: HomeHeaderPageHeaderProps) => {
  //console.log('HomeHeader', `${'variable'}`)
  return (
    <Header
      left={''}
      center={<div className={`text-center`}>Examples Home</div>}
      right={<div></div>}
    />
  );
};

export default HomeHeader;
