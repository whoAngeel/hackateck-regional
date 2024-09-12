import {Button, Tooltip} from "antd";
import React from "react";
import {GoArrowRight, GoHomeFill} from "react-icons/go";
import {Link} from "react-router-dom";
import {FaAngleLeft} from "react-icons/fa";
import {Alert} from 'antd';


function StartNow() {
    return (
        <div className="w-10/12 min-h-screen mt-4 mx-auto">
            <div className="items-center w-full flex gap-4">
                <Link to={"/crowdfunding"} style={{textDecoration: "none"}}>
                    <div className="hover:bg-base-300 rounded-full sm:h-8 sm:w-8 h-12 w-12 grid place-items-center">
                        <Tooltip title="Regresar" placement="bottomRight">
                            <FaAngleLeft/>
                        </Tooltip>
                    </div>
                </Link>
                <h2 className="sm:text-xl text-2xl font-bold uppercase">Crea tu campaña</h2>
            </div>

            <div className="w-full">
                <div className="my-5 flex items-center p-4 mb-4 text-blue-800 border-t-4 border-blue-300 bg-blue-50">
                    <svg className="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                         fill="currentColor" viewBox="0 0 20 20">
                        <path
                            d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                    </svg>
                    <div className="ms-3 text-sm font-medium">
                        Asegurate de tener toda la información necesaria de tu proyecto
                    </div>
                </div>

                

                <div className="w-full flex items-center justify-center">
                    <Button type="primary" size="large">
                        Comienza tu campaña de recaudación <GoArrowRight/>
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default StartNow;
