import { FC, useEffect, useRef, useState } from 'react';
import { useAuth } from '../auth/AuthProvider';
import { pb } from '../pb';
import { DataUser } from '../interfaces/General';

type DropdownActionProps = {
    id: string
}

const DropdownAction: FC<DropdownActionProps> = ({ id }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const auth = useAuth()

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };


    const eliminar = async (id: string) => {
        await pb.collection('users').delete(id);
        const records = await pb.collection('users').getFullList<DataUser>(undefined, { sort: '-created' });
        auth.setUsuarios(records);
    }

    useEffect(() => {
        const handleClickOutside = (event: any) => {
            if (dropdownRef.current !== null) {
                if (!dropdownRef.current.contains(event.target)) {
                    setIsOpen(false);
                }
            }
        };
        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, []);

    return (
        <div className="relative inline-block text-left" ref={dropdownRef}>
            <button onClick={toggleDropdown}
                className='text-xs font-semibold bg-gray-200 text-gray-400 py-1 px-3 rounded-lg hover:bg-gray-300 hover:text-gray-500 ease-in duration-200'>
                Acciones <span className="align-middle text-base material-symbols-outlined">expand_more</span>
            </button>
            {isOpen && (
                <div className="origin-top-right absolute right-0 z-10 rounded-md bg-white border border-gray-500/10">
                    <button onClick={() => eliminar(id)} className="flex items-center gap-1 text-xs font-semibold px-4 py-2 text-gray-400 hover:text-red-500 z-10 hover:bg-gray-100 ease-in duration-200 cursor-pointer">
                        <span className="text-sm material-symbols-outlined">
                            delete
                        </span>
                        Eliminar
                    </button>
                </div>

            )}
        </div>
    );
};

export { DropdownAction };
