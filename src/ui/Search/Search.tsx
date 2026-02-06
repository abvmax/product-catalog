import type { ChangeEvent, FC } from "react";
import "./Search.scss";
import type { SetURLSearchParams } from "react-router-dom";
import { Icon } from "../Icons/Icons";

interface SearchProps {
  searchCatalog: string;
  setSearchParam: SetURLSearchParams;
}

export const Search: FC<SearchProps> = ({ setSearchParam, searchCatalog }) => {

  const handlesSearchCatalog = (e: ChangeEvent<HTMLInputElement>): void => {
    setSearchParam({ searchCatalog: e.target.value });
  };

  return (
    <div className="search">
      <input
        value={searchCatalog}
        onChange={handlesSearchCatalog}
        className="search__field"
        placeholder="Поиск по каталогу"
      />
      <Icon name="search" width={20} height={20} className="search__icon-svg" />
      <button onClick={() => setSearchParam("")} className="search__clear-btn">
        <Icon name="x" width={30} height={30} className="search__clear-svg" />
      </button>
    </div>
  );
};
