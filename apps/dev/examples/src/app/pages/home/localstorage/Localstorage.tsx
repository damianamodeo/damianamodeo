import { AddLocalStorageItem, EditLocalStorage } from '@damianamodeo/ui/components/utility';

type LocalStoragePageProps = {
  changeSubpage: (newSubpage: string, direction: '<' | '>') => void;
};

export function LocalStorage({ changeSubpage }: LocalStoragePageProps) {
  //console.log('LocalStorage', `${variable}`)
  return (
    <div className={`h-full dark:text-white center-h-col gap-2 p-2`}>
      <AddLocalStorageItem></AddLocalStorageItem>
      <EditLocalStorage></EditLocalStorage>
    </div>
  );
}

export default LocalStorage;
