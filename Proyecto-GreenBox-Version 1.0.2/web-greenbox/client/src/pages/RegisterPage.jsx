import{useForm} from 'react-hook-form'
import { useAuth } from '../context/AuthContext'
import { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';


function RegisterPage() {

    const {register, handleSubmit, formState: {errors}} = useForm();
    const { signup, isAuthenticated, errors: registerErrors }  = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated) navigate("/tasks");
    }, [isAuthenticated]);

   const onSubmit = handleSubmit(async(values) => {
    signup(values);
   });
   
    return(
        <div className='fondo-universal'>
        <div className='flex  h-[calc(100vh-100px)] items-center justify-center'>
        <div className='bg-verde-translucido max-w-md w-full p-10 rounded-md'>
            {
                registerErrors.map((error, i) => (
                    <div className='bg-red-500 p-2 text-white' key={i}>
                        {error}
                    </div>
                ))
            }
            <form onSubmit={onSubmit}>
            <h1 className='text-3xl font-bold text-center my-2'>Registrarse</h1>
                <input type="text" {...register("username", {required: true})}
                    className='w-full bg-verdeClaro text-verde px-4 py-2 rounded-md my-2'
                    placeholder='Nombre de usuario'
                    />
                    {errors.username && (<p className='text-red-500'>El nombre de usuario es requerido</p>)}
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
                  <input type="int" {...register("phoneNumber", {required: true})}
                    className='w-full bg-verdeClaro text-verde px-4 py-2 rounded-md my-2'
                    placeholder='Numero de telefono'
                    />
                    {errors.phoneNumber && (<p className='text-red-500'>El numero de telefono  es requerido</p>)}
                <button type='submit'
                className='btn-login text-Claro px-5 py-2 rounded-md my-2'>
                    Registrarse
                </button>
            </form>
            <p className='flex gap-x-2 justify-between'>
            ¿Ya tienes una cuenta?{""} <Link to="/login" className='text-verdeClaro-500'>Iniciar Seccion</Link>
            </p>
        </div>
        </div>
        </div>
    )
}

export default RegisterPage;