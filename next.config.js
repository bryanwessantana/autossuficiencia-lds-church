/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Se as imagens das empresas (empresa.image) vierem de URLs externas, 
    // você precisa listar os domínios aqui para o Next.js permitir a otimização.
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // O '**' permite qualquer domínio. Para segurança, você pode substituir pelo domínio específico.
      },
    ],
  },
  /* outras opções de config aqui */
};

module.exports = nextConfig;