export const ParticipanteSchema = {
  nome: "",
  telefone: "",
  numero: "",
  sorteado: false,
  createdAt: null 
};

export function validarParticipante(data) {
  if (!data.nome || !data.telefone || !data.numero) {
    return { valido: false, erro: "Campos obrigatórios ausentes." };
  }
  return {
    valido: true,
    documento: {
      ...data,
      sorteado: false,
      createdAt: new Date()
    }
  };
}