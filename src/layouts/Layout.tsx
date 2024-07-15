import React, {useState} from 'react'
import BurgerMenu from "../components/BurgerMenu/BurgerMenu";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import {LayoutProps} from "../interfaces/Layout";
import AnimatedPage from "../pages/AnimatedPage/AnimatedPage";
import Header from "../components/Header/Header";


const Layout = ({children, notAnimated}: LayoutProps) => {
    const [isOpened, setOpened] = useState(false)

    return (
        <div>
            <BurgerMenu isOpened={isOpened} setOpened={() => setOpened(!isOpened)}/>
            <Navbar isCross={isOpened} setOpened={setOpened} />
            <Header />
            {
                notAnimated ? (
                    <>
                        {children}
                        {/*<Footer/>*/}
                    </>
                ) : (
                    <>
                        <AnimatedPage>
                            {children}
                            {/*<Footer/>*/}
                        </AnimatedPage>
                    </>
                )
            }
        </div>
    )
}

export default Layout