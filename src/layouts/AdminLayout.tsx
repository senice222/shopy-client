import React from 'react'
import Sidebar from "../components/ADMIN/Sidebar/Sidebar";
import {HeaderAdmin} from "../components/ADMIN/HeaderAdmin/HeaderAdmin";
import s from './AdminLayout.module.scss'
import AdminBurger from "../components/ADMIN/AdminBurger/AdminBurger";
import {useEffect, useState} from "react";
import {Navigate, Outlet} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../hooks/redux-hooks";
import {fetchAdmin} from "../store/features/AdminSlice";

const AdminLayout = ({active, setActive} : {active: boolean, setActive : React.Dispatch<React.SetStateAction<boolean>>}) => {
    // const [active, setActive] = useState(false)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchAdmin())
    }, [ ])
    const admin = useAppSelector(state => state.admin.admin)

    if (!admin) {
        return <Navigate to={'/login'} />
    }

    return (
        // <AnimatedPage>
            <div className={s.adminLayout}>
                <div className={s.sidebar}><Sidebar /></div>
                <div className={s.responsHeader}>
                    <HeaderAdmin setActive={() => setActive((prev) => !prev)}/>
                    <AdminBurger isActive={active} setActive1={setActive}/>
                </div>
                <Outlet/>
            </div>
        // {/*</AnimatedPage>*/}
    )
}

export default AdminLayout
//
// import Sidebar from "../components/ADMIN/Sidebar/Sidebar";
// import {HeaderAdmin} from "../components/ADMIN/HeaderAdmin/HeaderAdmin";
// import s from './AdminLayout.module.scss'
// import AdminBurger from "../components/ADMIN/AdminBurger/AdminBurger";
// import {useEffect, useState} from "react";
// import {Outlet} from "react-router-dom";
//
// const AdminLayout = () => {
//     const [active, setActive] = useState(false)
//     console.log(active)
//     useEffect(() => {
//         console.log(228)
//     }, [ ]);
//
//     return (
//         // <AnimatedPage>
//         <div className={s.adminLayout}>
//             <div className={s.sidebar}><Sidebar /></div>
//             <div className={s.responsHeader}>
//                 <HeaderAdmin setActive={() => setActive((prev) => !prev)}/>
//                 <AdminBurger isActive={active} setActive={() => setActive((prev) => !prev)}/>
//             </div>
//             <Outlet/>
//         </div>
//         // {/*</AnimatedPage>*/}
//     )
// }
//
// export default AdminLayout

