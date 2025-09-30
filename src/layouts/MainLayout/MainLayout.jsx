import { Outlet } from "react-router-dom";
import SideMenu from "../../components/common/SideMenu/SideMenu";
import Header from "../../components/common/header/Header";
import SearchInput from "../../components/common/SearchInput/SearchInput";
import styles from "./style.module.css";
import ScrollTopButton from "../../components/common/ScrollTopButton/ScrollTopButton";
const MainLayout = () => {
  const { MainLayout, content } = styles;
  return (
    <div className={MainLayout}>
      <nav>
        <SideMenu />
      </nav>
      <div className={content}>
        <header>
          <Header />
          <SearchInput />
        </header>
        <Outlet />
      </div>
      <ScrollTopButton />
    </div>
  );
};

export default MainLayout;
