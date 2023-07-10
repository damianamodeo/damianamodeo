/* eslint-disable @typescript-eslint/no-explicit-any */
import { Screen } from '@damianamodeo/ui/containers';
import { Home, Settings } from '@damianamodeo/ui/icons';
import { ComponentType, LazyExoticComponent, ReactNode, lazy } from 'react';

type Subpages = {
  [name: string]: {
    Header: LazyExoticComponent<ComponentType<any>>;
    Content: LazyExoticComponent<ComponentType<any>>;
  };
};

type PageType = {
  startPage: string;
  Icon: ReactNode;
  subpages: Subpages;
};

const icons: { [pageName: string]: any } = {
  Home: Home,
  Settings: Settings,
};

const pages: PageType[] = [
  { startPage: 'Home', subpages: ['Home', 'Test'] },
  { startPage: 'Settings', subpages: ['Settings', 'Test'] },
].map(({ startPage, subpages }: { startPage: string; subpages: string[] }) => {
  return {
    startPage: startPage,
    Icon: icons[startPage],
    subpages: subpages.reduce((pages: Subpages, page: string) => {
      pages[page] = {
        Header: lazy(
          () =>
            import(
              `./pages/${startPage.toLowerCase()}/${page.toLowerCase()}/${page}Header`
            )
        ),
        Content: lazy(
          () =>
            import(
              `./pages/${startPage.toLowerCase()}/${page.toLowerCase()}/${page}`
            )
        ),
      };
      return pages;
    }, {}),
  };
});

export function App() {
  return <Screen pages={pages}></Screen>;
}

export default App;
