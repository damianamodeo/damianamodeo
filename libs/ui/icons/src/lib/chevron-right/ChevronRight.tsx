/* eslint-disable-next-line */
export interface ChevronRightProps {}

export function ChevronRight(props: ChevronRightProps) {
  return (
    <svg className="w-[20px] h-[20px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="m1 9 4-4-4-4"/>
  </svg>
  );
}

export default ChevronRight;
