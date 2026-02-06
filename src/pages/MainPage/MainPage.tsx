import { CatalogList } from "../../components/CatalogList/CatalogList"
import { catalogData } from "../../data"

export const MainPage = () => {
    return (
        <CatalogList catalogData={catalogData} />
    )
}