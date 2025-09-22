import TopHeader from "./header/TopHeader";
import MainHeader from "./header/MainHeader";
import MainContainer from "../hoc/MainContainer";

const Header = () => {
    return (
        <>
            <TopHeader />
            <MainContainer>
                <MainHeader />
            </MainContainer>
        </>
    )
}

export default Header;