import { FC } from "react";
import { Card } from "../components/Card";



const Dashboard: FC = () => {

    return (
        <>
            <div className="flex gap-3 p-3">
                <Card bgColor="bg-gradient-to-r from-indigo-500 to-violet-800" titulo="Venta Semanal" nVentas={23} />
                <Card bgColor="bg-gradient-to-r from-sky-400 to-blue-800" titulo="Venta Mensual" nVentas={80} />
                <Card bgColor="bg-gradient-to-r from-amber-400 to-red-500" titulo="Total de Ventas" nVentas={103} />
            </div>
        </>
    )
}

export { Dashboard }