  import {EditLocalStorage} from '@damianamodeo/ui/components/utility';

type EditlocalstoragePageProps = {
  changeSubpage: (newSubpage: string, direction: '<' | '>') => void;
};

export function Editlocalstorage({ changeSubpage }: EditlocalstoragePageProps) {

  return (
    <div className={`h-full dark:text-white center-h-col`}>
      <EditLocalStorage></EditLocalStorage>
    </div>
  );
}

export default Editlocalstorage;
