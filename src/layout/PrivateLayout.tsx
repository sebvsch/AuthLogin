import { Outlet } from 'react-router-dom';
import { AsideMenu } from '../components/AsideManu';

export default function PrivateLayout() {
    return (
        <>
            <div className='flex flex-row h-screen w-screen overflow-hidden'>
                <AsideMenu />
                <div>
                    <div>
                        {<Outlet />}
                    </div>
                </div>
            </div>
        </>
    )
}