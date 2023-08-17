import { useRoutes } from "react-router-dom";
// import { Countries } from "../pages/Countries/Countries";
// import { CountryPage } from "../pages/CountryPage/styles";

export const MainRoutes = () => {
    return useRoutes([
        {path: '/', element: <Countries />}
        {path: '/country/:name', element: <CountryPage />},
    ])
} 