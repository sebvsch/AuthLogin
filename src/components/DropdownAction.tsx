import React, { useEffect, useRef, useState } from 'react';

const DropdownAction: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };



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
                <div className="origin-top-right absolute right-0 z-10 rounded-md bg-white border border-blue-500/20">
                    <span className="flex items-center gap-1 text-xs font-semibold px-4 py-2 text-gray-400 hover:text-red-500 z-10 hover:bg-gray-100 ease-in duration-200 cursor-pointer">
                        <span className="text-lg material-symbols-outlined">
                            delete
                        </span>
                        Eliminar
                    </span>
                    <span className="flex items-center gap-1 text-xs font-semibold px-4 py-2 text-gray-400 hover:text-green-500 z-10 hover:bg-gray-100 ease-in duration-200 cursor-pointer">
                        <span className="text-lg material-symbols-outlined">
                            verified_user
                        </span>
                        Verificar
                    </span>
                </div>

            )}
        </div>
    );
};

export { DropdownAction };
