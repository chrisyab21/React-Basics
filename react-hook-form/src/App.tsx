import { useState } from 'react'
import {useForm } from 'react-hook-form';
import './App.css'

export const App = () => {
  const [count, setCount] = useState(0);

  const {register, handleSubmit, 
      formState: {errors},
      watch,
      setValue,
      reset
    } = useForm({
      defaultValues: {
        nombre: 'juan',
        email: 'pepelucho@gmail.com',
        pais: null,
        confirmarPassword: null,
        terminos: null,
        fechaNacimiento: null,
        provincia: null,
        password: null,
        Nombredelarchivo: '',

      }
    });

   console.log(errors);
  const onSubmit = (data:any)=> { 
    console.log(data);
    alert('enviando datos');
    setValue('email', '');
    reset();
  }

  return (
    <div className='container'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="nombre">Nombre</label>
        <input 
          type="text" 
          id='nombre' 
          {...register('nombre', { 
            required: {
              value:true,
              message: 'El nombre es requerido'
            }, 
            minLength: {
              value: 2,
              message: 'El nombre debe tener minimo 2 caracteres'
            },
            maxLength: {
              value: 15,
              message: 'El nombre debe tener un maximo de 7 caracteres'
            }, 
          })}
         />
        { errors.nombre  && <span>{`${errors.nombre.message}`}</span>}
      
        <label htmlFor="correo">Correo</label>
        <input type="email" 
          id="correo" 
          autoComplete='on' 
          {...register('email', {
              required:{
                value:true,
                message: 'Correo es requerido'
              },
              pattern: {
                value: /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/,
                message: 'Correo no valido'
              }
            })} 
          />
        { errors.email && <span>{`${errors.email.message}`}</span>}

        <label htmlFor="password">Password</label> 
        <input 
         type="password" 
         id='password' 
         {...register('password',{
             required: {
              value: true,
              message: 'El password es requerido'
             },
             minLength: {
              value: 4,
              message: 'La contraseña debe tener minimo 4 caracteres'
             },
             maxLength: {
              value: 10,
              message: 'La contraseña debe tener maximo 10 caracteres'
             }
         })} 
         />
        { errors.password && <span>{`${errors.password.message}`}</span>}

        <label htmlFor="confirmarPassword">Confirmar Password</label> 
        <input type="password" id='confirmarPassword' 
        {...register('confirmarPassword', {
          required:{
            value: true,
            message: 'La contraseña es requerida'
          },
          validate: (value) => {
           return  value === watch('password') ? true : 'Las contraseñas no coinciden';
          }
        })}
        />
        { errors.confirmarPassword && <span>{`${errors.confirmarPassword.message}`}</span>}


        <label htmlFor="fechaNacimiento">Fecha de Nacimiento</label>
        <input 
         type="date" 
         id='fechaNacimiento' 
         {...register('fechaNacimiento', {
          required: {
            value: true,
            message: 'La fecha es requerida'
          },
          validate: () => {

            return true;
          }

         })}
         />
        { errors.fechaNacimiento && <span>{`${errors.fechaNacimiento.message}`}</span>}
         

        <label htmlFor="pais">Pais</label>
        <select {...register('pais')} id='pais'>
          <option value="mx">Mexico</option>
          <option value="ar">Argentina</option>
          <option value="bo">Bolivia</option>
          <option value="co">Colombia</option>
        </select>

        { watch('pais') === 'ar' && 
          <>
            <input 
             type='text'
             {...register('provincia', {
               required: {
                value: true,
                message: 'La provincia es requerida'
               }
             })}
             ></input>
             {errors.provincia && <span>{`${errors.provincia.message}`}</span>}
          </>
        
        }

        <label htmlFor="foto">Foto de Perfil</label>
        <input type="file" id='foto' onChange={(e) => {
          if(e.target.files){
            setValue('Nombredelarchivo', e.target.files[0].name);
          }
        }}
        />

        <label htmlFor="terminos">Acepto Terminos y Condiciones</label>
        <input 
         type="checkbox" 
         id='terminos'
         {...register('terminos', {
          required: {
            value: true,
            message: 'Debe aceptar los termino y condiciones'
          }
         })} 
         />
        { errors.terminos && <span>{`${errors.terminos.message}`}</span>}
        <button>Enviar </button>
        <pre>
          {JSON.stringify(watch(),null,2)}
        </pre>
        
      </form>
    </div>
  )
}
