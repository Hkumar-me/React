import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function UserInfo() {
    let { name } = useParams();
    let navigate = useNavigate();
    let goBack = () => {
        navigate("/users");
        // navigate(-1);
    };

    return (
        <div className='w-[50%] h-screen bg-blue-400 flex flex-col items-center justify-center gap-40'>
            <h1 className='text-white text-xl'>Hello, {name}</h1>
            <button onClick={goBack} className='p-2 bg-blue-800 text-white rounded-md'>
                Go Back
            </button>
        </div>
    );
}

export default UserInfo;
