import {createBrowserRouter, RouteObject} from "react-router-dom";
import {LayoutWrapper} from "./components/LayoutWrapper/LayoutWrapper.tsx";
import { FC } from "react";
import { MainPage } from "./pages/MainPage/MainPage.tsx";

const path = (path: string, Page: FC): RouteObject => ({
    path,
    element: <Page />,
});

export const router = createBrowserRouter([
    {
        element: <LayoutWrapper />,
        children: [
            path('/', MainPage),
        ]
    }
]);