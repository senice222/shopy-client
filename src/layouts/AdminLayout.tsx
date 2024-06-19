import {LayoutProps} from "../interfaces/Layout";
import AnimatedPage from "../pages/AnimatedPage/AnimatedPage";
import Sidebar from "../components/ADMIN/Sidebar/Sidebar";


const AdminLayout = ({children}: LayoutProps) => {

    return (
        <AnimatedPage>
            <div style={{display: "flex"}}>
                <Sidebar />
                {children}
            </div>
        </AnimatedPage>
    )
}

export default AdminLayout