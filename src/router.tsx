import {createBrowserRouter, RouteObject} from "react-router-dom";
import {LayoutWrapper} from "./components/LayoutWrapper/LayoutWrapper.tsx";
import { FC } from "react";
import { MainPage } from "./pages/MainPage/MainPage.tsx";
import {SearchPlayerPage} from './pages/SearchPlayerPage/SearchPlayerPage.tsx'
import { PlayerPage } from "./pages/PlayerPage/PlayerPage.tsx";
import {TeamRosterPage} from "./pages/TeamRosterPage/TeamRosterPage.tsx";

const path = (path: string, Page: FC): RouteObject => ({
    path,
    element: <Page />,
});

export const router = createBrowserRouter([
    {
        element: <LayoutWrapper />,
        children: [
            path('/', MainPage),
            path('/players', SearchPlayerPage),
            path('/players/:id', PlayerPage),
            path('/teams/:teamAbbrev', TeamRosterPage)
        ]
    }
]);