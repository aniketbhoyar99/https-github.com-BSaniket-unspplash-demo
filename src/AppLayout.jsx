import React,{useState,useEffect} from 'react'
import { useLocation } from 'react-router';
import Home from './pages/Home';
const AppLayout = ({children}) => {
    const [isHeaderVisible, setIsHeaderVisible] = useState(true);
    const location =useLocation();
    useEffect(() => {
        if(location.pathname === "/demo")
        setIsHeaderVisible(false)
    }, [location])
    return (
        <div>
            {isHeaderVisible && <Home/>}
            {children}
        </div>)
        ;
}

export default AppLayout;
