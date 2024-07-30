import style from './Login.module.scss'
import bg from '../../../assets/Background pattern decorative.png'
import logo from '../../../assets/Logomark.png'
import {Input} from "antd";
import {EyeInvisibleOutlined, EyeTwoTone} from "@ant-design/icons";
import Button from "../../../components/Button/Button";
import {useState} from "react";
import {useAppDispatch, useAppSelector} from "../../../hooks/redux-hooks";
import {fetchLogin} from "../../../store/features/AdminSlice";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";

const Login = () => {
    const navigate = useNavigate()
    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const admin = useAppSelector((state) => state.admin.admin)
    const dispatch = useAppDispatch()
    const handleLogin = () => {
        if (username && password) {
            dispatch(fetchLogin({username, password}))
        }

    }
    useEffect(() => {
        if (admin?.login) {
            navigate('/panel')
        }
    }, [admin]);
    
    return (
        <div className={style.loginWrapper}>
            <div className={style.formWrapper}>
                <div className={style.login}>
                    <img src={logo} alt="/"/>
                    <div className={style.items}>
                        <div className={style.item}>
                            <p className={style.title}>Логин</p>
                            <Input onChange={(e) => setUserName(e.target.value)} className={style.input} placeholder="username"/>
                        </div>
                        <div className={style.item}>
                            <p className={style.title}>Пароль</p>
                            <Input onChange={(e) => setPassword(e.target.value)} className={style.input} placeholder="••••••••"/>
                        </div>
                        <div className={style.item}>
                            <Button onClick={handleLogin} text={"Войти"} width={"100%"} height={"44px"} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
