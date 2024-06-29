import React, {useState} from 'react'
import BurgerMenu from "../components/BurgerMenu/BurgerMenu";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import {LayoutProps} from "../interfaces/Layout";
import AnimatedPage from "../pages/AnimatedPage/AnimatedPage";


const Layout = ({children, isRightArrow, notAnimated}: LayoutProps) => {
    const [isOpened, setOpened] = useState(false)

    return (
        <div>
            <BurgerMenu isOpened={isOpened} setOpened={() => setOpened(!isOpened)}/>
            <Header isCross={isOpened} setOpened={() => setOpened(true)} isRightArrow={isRightArrow}/>
            {
                notAnimated ? (
                    <>
                        {children}
                        <Footer/>
                    </>
                ) : (
                    <>
                        <AnimatedPage>
                            {children}
                            <Footer/>
                        </AnimatedPage>
                    </>
                )
            }
        </div>
    )
}

export default Layout