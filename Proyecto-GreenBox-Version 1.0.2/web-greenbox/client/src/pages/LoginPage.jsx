import {useForm} from 'react-hook-form'
import { useAuth } from '../context/AuthContext'
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import "../components/css/Greenbox.css"


function LoginPage() {

    const {register, handleSubmit, formState: {errors}} = useForm()

    const {signin, errors: signinErrors, isAuthenticated} = useAuth();
    const navigate = useNavigate()

    const onSubmit = handleSubmit (data => {
        signin(data)
    });   

    useEffect(() =>{
        if(isAuthenticated) navigate("/tasks")
    }, [isAuthenticated]);

    return(
        <div className='fondo-universal'>
        <div className='flex  h-[calc(100vh-100px)] items-center justify-center'>
        <div className='bg-verde-translucido max-w-md w-full p-10 rounded-md'>
        {
                signinErrors.map((error, i) => (
                    <div className='bg-red-500 p-2 text-white text-center my-2' key={i}>
                        {error}
                    </div>
                ))
            }
                <h1 className='text-3xl font-bold text-center my-2'>Iniciar Seccion</h1>
             <form onSubmit={onSubmit}>
                <input type="email"  {...register("email", {required: true})}
                 className='w-full bg-verdeClaro text-verde px-4 py-2 rounded-md my-2'
                 placeholder='Correo electronico'
                 />
                  {errors.email && (<p className='text-red-500'>Se requiere correo electrónico</p>)}
                <input type="password"  {...register("password", {required: true})}
                 className='w-full bg-verdeClaro text-verde px-4 py-2 rounded-md my-2'
                 placeholder='Contraseña'
                 />
                  {errors.password && (<p className='text-red-500'>Se requiere contraseña</p>)}
                <button type='submit'
                  className='btn-login text-Claro px-5 py-2 rounded-md my-2'>
                    Login
                </button>
            </form>
            <p className='flex gap-x-2 justify-between'>
            ¿No tienes una cuenta? <Link to="/register" className='text-verdeClaro-500'>Registrarse</Link>
            </p>
             </div>
        </div>
        </div>
    )
}

export default LoginPage