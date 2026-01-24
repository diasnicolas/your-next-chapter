// src/hooks/useIrParaWhatsApp.js
export function useIrParaWhatsApp() {
  // aceita tipo (string) e mensagem opcional (string)
  const irParaWhatsApp = (tipo: string, mensagem?: string) => {
    const hashBase = `#/whatsapp?tipo=${encodeURIComponent(tipo)}`;
    const href = mensagem
      ? `${window.location.origin}${window.location.pathname}${hashBase}&mensagem=${encodeURIComponent(mensagem)}`
      : `${window.location.origin}${window.location.pathname}${hashBase}`;

    // abre a página /whatsapp em nova aba (ela fará o redirecionamento final ao WhatsApp)
    window.open(href, '_blank');
  };

  return irParaWhatsApp;
}