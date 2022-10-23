import {
  BrowserRouter,
  Routes as BrowserRoutes,
  Route,
} from "react-router-dom";

import { Home } from "./pages/Home"
import { LaunchesList } from "./pages/LaunchesList";

export function Routes() {
  return (
    <BrowserRouter>
      <BrowserRoutes>
        <Route path="/" element={<Home />} />
        <Route path="/launches/past" element={<LaunchesList type="past" />} />
        <Route path="/launches/upcoming" element={<LaunchesList type="upcoming" />} />
      </BrowserRoutes>
    </BrowserRouter>
  )
}