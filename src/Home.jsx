import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function Home() {
  return (
    <div>
        <Header></Header>
        <h2>this is the Home component</h2>
        <Outlet></Outlet>
    </div>
  )
}
