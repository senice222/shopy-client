
import Sidebar from "../components/ADMIN/Sidebar/Sidebar";
import {HeaderAdmin} from "../components/ADMIN/HeaderAdmin/HeaderAdmin";
import s from './AdminLayout.module.scss'
import AdminBurger from "../components/ADMIN/AdminBurger/AdminBurger";
import {useEffect, useState} from "react";
import {Outlet} from "react-router-dom";

const AdminLayout = () => {
    const [active, setActive] = useState(false)
    console.log(active)
    useEffect(() => {
        console.log(228)
    }, [ ]);

    return (
        // <AnimatedPage>
            <div className={s.adminLayout}>
                <div className={s.sidebar}><Sidebar /></div>
                <div className={s.responsHeader}>
                    <HeaderAdmin setActive={() => setActive((prev) => !prev)}/>
                    <AdminBurger isActive={active} setActive={() => setActive((prev) => !prev)}/>
                </div>
                <Outlet/>
            </div>
        // {/*</AnimatedPage>*/}
    )
}

export default AdminLayout
