import { type FC, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import "./CatalogList.scss";
import type { CatalogArr } from "../../data";
import { Search } from "../../ui/Search/Search";
import { CatalogCard } from "../CatalogCard/CatalogCard";
import { CheckboxFilter } from "../../ui/CheckboxFilter/CheckboxFilter";

interface catalogListProps {
    catalogData: CatalogArr;
}

export const CatalogList: FC<catalogListProps> = ({ catalogData }) => {
    const [searchParam, setSearchParam] = useSearchParams();
    const searchCatalog = searchParam.get("searchCatalog") || "";

    const [selectedTypes, setSelectedTypes] = useState<string[]>(['wired', 'wireless']);

    const filteredResults = useMemo(() => {
        const searchTerm = searchCatalog.toLowerCase();

        let result = catalogData;

        if (selectedTypes.length > 0) {
            result = catalogData.filter(category =>
                selectedTypes.includes(category.type)
            );
        }

        if (searchTerm) {
            result = result.filter(category =>
                category.items.some(item =>
                    item.title.toLowerCase().includes(searchTerm)
                )
            ).map(category => ({
                ...category,
                items: category.items.filter(item =>
                    item.title.toLowerCase().includes(searchTerm)
                )
            })).filter(category => category.items.length > 0);
        }

        return result;
    }, [searchCatalog, catalogData, selectedTypes]);

    const typeOptions = [
        { value: 'wired', label: 'Проводные' },
        { value: 'wireless', label: 'Беспроводные' },
    ];

    return (
        <section id="catalog" className="catalog p70">
            <div className="container catalog__container">
                <div className="catalog__block">
                    <CheckboxFilter
                        options={typeOptions}
                        selectedValues={selectedTypes}
                        onChange={setSelectedTypes}
                        title="Тип наушников"
                        className="catalog__filter"
                    />

                    <Search
                        setSearchParam={setSearchParam}
                        searchCatalog={searchCatalog}
                    />
                </div>

                {filteredResults.length > 0 ? (
                    filteredResults.map(
                        ({ id, title, items }) => {
                            return (
                                <div className="catalog__content" key={id}>
                                    <h2 className="catalog__category-title">{title}</h2>
                                    <ul className="catalog__items">
                                        {items.map(item => (
                                            <li className='catalog__item' key={item.id}>
                                                <CatalogCard {...item} />
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            );
                        }
                    )
                ) : (
                    <div className="catalog__content">
                        <h3 className="catalog__title-min title-min">
                            По вашему запросу ничего не найдено
                        </h3>
                    </div>
                )}

            </div>
        </section>
    );
};