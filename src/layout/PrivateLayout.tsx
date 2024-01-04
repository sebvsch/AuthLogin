import { Outlet } from 'react-router-dom';
import { AsideMenu } from '../components/AsideManu';

export default function PrivateLayout() {
    return (
        <>
            <AsideMenu />
            <Outlet />
        </>
    )
}