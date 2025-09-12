import AsideMenu from "../../components/common/AsideMenu/AsideMenu";
import Header from "../../components/common/header/Header";
import SearchInput from "../../components/common/SearchInput/SearchInput";
import styles from"./style.module.css"
const MainLayout = () => {
  const { MainLayout } = styles;
  return (
    <div className={MainLayout}>
      <nav>
        <AsideMenu />
      </nav>
      <header>
        <Header />
      <SearchInput/>
      </header>
    </div>
  );
};

export default MainLayout;
