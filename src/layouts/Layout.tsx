import React, { useEffect, useState } from 'react'
import BurgerMenu from "../components/BurgerMenu/BurgerMenu";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { LayoutProps } from "../interfaces/Layout";
import AnimatedPage from "../pages/AnimatedPage/AnimatedPage";
import Header from "../components/Header/Header";
import { useTelegram } from '../hooks/useTelegram';
import { useLocation, useNavigate } from 'react-router-dom';


const Layout = ({ children, notAnimated }: LayoutProps) => {
    const [isOpened, setOpened] = useState(false)
    const { onBackButtonClick } = useTelegram();
    const navigate = useNavigate()
    const { pathname } = useLocation()

    useEffect(() => {
        if (pathname !== '/') {
            onBackButtonClick(() => {
                navigate('/')
                window.scrollTo({
                    top: 0
                })
            });    
            return () => onBackButtonClick(null);
        }
    }, [onBackButtonClick, navigate, pathname]);

    return (
        <div>
            <BurgerMenu isOpened={isOpened} setOpened={() => setOpened(!isOpened)} />
            <Navbar isCross={isOpened} setOpened={setOpened} />
            <Header />
            {
                notAnimated ? (
                    <>
                        {children}
                        <Footer />
                    </>
                ) : (
                    <>
                        <AnimatedPage>
                            {children}
                            <Footer />
                        </AnimatedPage>
                    </>
                )
            }
        </div>
    )
}

export default Layout