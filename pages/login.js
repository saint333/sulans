import { signIn } from "next-auth/react";
import { Button } from "primereact/button";
import { FloatLabel } from "primereact/floatlabel";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import React, { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica de autenticación con email y contraseña
    console.log({ email, password });
  };

  return (
    <div className='min-h-screen flex flex-col justify-center sm:py-12'>
      <div className='p-10 xs:p-0 mx-auto w-full md:max-w-md text-center'>
      <h1 className="text-5xl typewriter flex">SULANS</h1>
        <div className='dark:bg-gray-800 shadow-2xl w-full rounded-2xl divide-y divide-gray-200 dark:divide-gray-700'>
          <form
            onSubmit={handleSubmit}
            className='px-5 py-7 pt-10 flex flex-col gap-7'
          >
            <FloatLabel>
              <InputText
                id='username'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                type='email'
                className='w-full'
              />
              <label htmlFor='username'>Correo</label>
            </FloatLabel>
            <FloatLabel>
              <Password
                inputId='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                feedback={false}
                inputClassName="w-full"
                pt={{
                  root: "w-full",
                }}
              />
              <label htmlFor='password'>Contraseña</label>
            </FloatLabel>

            <Button label='Iniciar Sesion' severity="contrast"/>
          </form>

          <div className='p-5 '>
            <div className='text-center py-5'>
              <Button label="Inicia sesión con Google" icon="pi pi-google" onClick={() => signIn("google")} className="w-full" severity="contrast" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
