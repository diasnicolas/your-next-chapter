import React, { useEffect, useState } from 'react';

// Hook inline - você pode mover para arquivo separado se quiser
const useWhatsAppParams = ({ autoRedirect = true, redirectDelay = 3000 } = {}) => {
  const [whatsappUrl, setWhatsappUrl] = useState('');
  const [isRedirecting, setIsRedirecting] = useState(false);

  const getUrlParameter = (name: string): string => {
    const hash = window.location.hash; // "#/whatsapp?tipo=reservaagora"
    const queryString = hash.split("?")[1]; // "tipo=reservaagora"
    const params = new URLSearchParams(queryString);

    return params.get(name) || '';
  };

  const buildWhatsAppUrl = (phone: string, messageType: string, mensagemParam?: string) => {
    let message = '';

    // se veio mensagem personalizada via query `mensagem`, usa ela direta
    if (mensagemParam) {
      message = mensagemParam;
    } 
    
    switch (messageType) {
      case 'agendardiagnostico':

        message = `Oi! Gostaria de agendar uma reunião de diagnóstico de viagem! ${message}😁`;
        break;
    }

    const encodedMessage = encodeURIComponent(message);
    return `https://api.whatsapp.com/send/?phone=${phone}&text=${encodedMessage}`;
  };

  const redirectToWhatsApp = () => {
  if (!whatsappUrl) return;
  
  setIsRedirecting(true);
  try {
    // Tenta redirecionar na mesma aba
    window.location.href = whatsappUrl;
    
    // Fallback: se após 1 segundo não redirecionou, abre em nova aba
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
    }, 1000);
  } catch (error) {
    window.open(whatsappUrl, '_blank');
  }
};

// 1° efeito — monta a URL
  useEffect(() => {
    const telefone = getUrlParameter('telefone') || '5511997850501';
    const tipo = getUrlParameter('tipo') || 'padrao';
    const mensagem = getUrlParameter('mensagem') || '';
    setWhatsappUrl(buildWhatsAppUrl(telefone, tipo, mensagem));
  }, []);

// 2° efeito — inicia o redirecionamento quando a URL mudar
useEffect(() => {
  if (autoRedirect && whatsappUrl) {
    const timer = setTimeout(() => redirectToWhatsApp(), redirectDelay);
    return () => clearTimeout(timer);
  }
}, [autoRedirect, redirectDelay, whatsappUrl]);

  return {
    whatsappUrl,
    redirectToWhatsApp,
    isRedirecting
  };
};

const WhatsApp: React.FC = () => {
  const { whatsappUrl, redirectToWhatsApp, isRedirecting } = useWhatsAppParams({
    autoRedirect: true,
    redirectDelay: 1500
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 bg-pattern">
      <div className="flex items-center justify-center min-h-screen p-4">
        <div className="whatsapp-card max-w-md w-full mx-auto p-6">
          <div className="flex justify-center mb-4">
            <div className="bg-green-100 p-4 rounded-full">
              <svg 
                className="w-16 h-16 text-green-500" 
                fill="currentColor" 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 448 512"
              >
                <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
              </svg>
            </div>
          </div>
          
          <h1 className="text-2xl md:text-3xl font-bold text-center text-green-600 mb-3">
            {isRedirecting ? 'Redirecionando...' : 'Redirecionando para o WhatsApp'}
          </h1>
          
          <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-6 rounded">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-green-800 text-center">
                  {isRedirecting 
                    ? 'Abrindo WhatsApp agora...' 
                    : 'Aguarde um instante. Você será conectado com nossa equipe de atendimento em segundos!'
                  }
                </p>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mb-6">
            <div className={`whatsapp-loader ${isRedirecting ? 'opacity-50' : ''}`}></div>
          </div>
          
          <div className="text-center">
            <button 
              onClick={redirectToWhatsApp}
              disabled={!whatsappUrl || isRedirecting}
              className="whatsapp-btn inline-flex items-center justify-center px-6 py-3 rounded-lg text-white font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <svg 
                className="w-6 h-6 mr-2" 
                fill="currentColor" 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 448 512"
              >
                <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
              </svg>
              {isRedirecting ? 'Redirecionando...' : 'Ir agora para o WhatsApp'}
            </button>
          </div>
          
          {!isRedirecting && (
            <p className="text-center text-sm text-gray-500 mt-4">
              Caso não seja redirecionado automaticamente, clique no botão acima
            </p>
          )}
          
          <div className="mt-6 text-center text-sm text-gray-500 border-t pt-4">
            <p>Larissa Kassner | Travel Designer</p>
            <p className="font-semibold mt-1">Marca autoral, premium, focada em viagens personalizadas sob medida</p>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes pulse {
            0% {
              box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7);
            }
            70% {
              box-shadow: 0 0 0 10px rgba(37, 211, 102, 0);
            }
            100% {
              box-shadow: 0 0 0 0 rgba(37, 211, 102, 0);
            }
          }
          
          @keyframes rotation {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
          
          .whatsapp-card {
            background: white;
            border-radius: 16px;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
            overflow: hidden;
            position: relative;
          }
          
          .whatsapp-card::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 6px;
            background: linear-gradient(90deg, #03c97a, #25d366);
          }
          
          .whatsapp-btn {
            background: #25d366;
            transition: all 0.3s ease;
            box-shadow: 0 4px 12px rgba(37, 211, 102, 0.3);
            animation: pulse 1.5s infinite;
          }
          
          .whatsapp-btn:hover:not(:disabled) {
            transform: translateY(-2px);
            box-shadow: 0 6px 16px rgba(37, 211, 102, 0.4);
          }
          
          .whatsapp-loader {
            width: 48px;
            height: 48px;
            border: 5px solid #25d366;
            border-bottom-color: transparent;
            border-radius: 50%;
            display: inline-block;
            box-sizing: border-box;
            animation: rotation 1s linear infinite;
          }
          
          .bg-pattern {
            background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2325d366' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
          }
        `
      }} />
    </div>
  );
};

export default WhatsApp;