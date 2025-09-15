import { Outlet } from "react-router-dom";
import SideMenu from "../../components/common/SideMenu/SideMenu";
import Header from "../../components/common/header/Header";
import SearchInput from "../../components/common/SearchInput/SearchInput";
import styles from "./style.module.css";
const MainLayout = () => {
  const { MainLayout } = styles;
  return (
    <div className={MainLayout}>
      <nav>
        <SideMenu />
      </nav>
      <div>
        <header>
          <Header />
          <SearchInput />
        </header>
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
