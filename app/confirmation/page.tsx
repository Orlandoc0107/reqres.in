'use client'

// ...
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';

const ConfirmationPage = () => {
  const router = useRouter();
  const [registrationMessage, setRegistrationMessage] = useState<{ id: number; token: string } | null>(null);

  useEffect(() => {
    const queryFromUrl = window.location.search;
    const dataFromQuery = new URLSearchParams(queryFromUrl).get('data');
    const parsedMessage = dataFromQuery ? JSON.parse(dataFromQuery) : null;
    setRegistrationMessage(parsedMessage);
  }, [router]);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-md bg-color4 p-8 rounded shadow-md">
        <h1 className="text-2xl font-bold mb-4">Confirmation Page</h1>
        
        {/* Mostrar mensaje de éxito si hay datos */}
        {registrationMessage ? (
          <div className="mt-4">
            <p>¡Registro exitoso!</p>
            <p>ID: {registrationMessage.id}</p>
            <p>Token: {registrationMessage.token}</p>
            <p>Estos datos son simulados y provienen de reqres.in</p>
            <div className='justify-center items-center bg-color3 text-color1 text-center border rounded-md m-2 p-2'>
              <button>
              <Link href="/">Regresar</Link>
              </button>
            </div>
          </div>

        ) : (
          /* Mostrar mensaje de error si no hay datos */
          <div className="mt-4">
            <p>¡Ocurrió un error durante la confirmación!</p>
            <p>Por favor, inténtalo nuevamente o contacta al soporte.</p>
            <div className='justify-center items-center bg-color3 text-color1 text-center border rounded-md m-2 p-2'>
              <button>
              <Link href="/">Regresar</Link>
              </button>
              </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ConfirmationPage;
