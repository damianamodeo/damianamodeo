import { Input } from '@damianamodeo/ui/inputs';
import { useReducer } from 'react';

const reducer = (state: any, { type, payload }: any) => {
  if (type === 'init') return { ...payload };
  localStorage.setItem(type, payload);
  return Object.keys(localStorage).map((item) => {
    return { key: item, value: localStorage.getItem(item) };
  });
};

export const EditLocalStorage = () => {
  localStorage.setItem('great', 'nikki');
  const initState = Object.keys(localStorage).map((item) => {
    return { key: item, value: localStorage.getItem(item) };
  });
  const [state, dispatch] = useReducer(reducer, initState);

  const onChange = (values: any) => dispatch(values);

  return (
    <div className={`h-full dark:text-white center-h-col gap-2 p-2`}>
      {state.map((item: any, index: number) => {
        return (
          <Input onChange={onChange} key={item.key} value={item.value}>
            {item.key}
          </Input>
        );
      })}
    </div>
  );
};

export default EditLocalStorage;
