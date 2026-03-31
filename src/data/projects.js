const BULLET = `<svg viewBox="0 0 24 24" fill="currentColor" stroke="none" style="width: 0.8em; height: 0.8em; display: inline-block; vertical-align: middle; margin-right: 0.4em; opacity: 0.8;"><circle cx="12" cy="12" r="4"/></svg>`;

const rawProjects = [
  {
    title: {
      en: "Mel Colorindo",
      pt: "Mel Colorindo",
    },
    folderName: "melcolorindo",
    date: {
      en: "2026",
      pt: "2026",
    },
    description: {
      en: `
        Complete full-stack e-commerce platform for <b>Mel Colorindo</b>, an artisan product brand. <br><br>
        <b>Technical highlights:</b><br>
        ${BULLET}Developed with <b>React + TypeScript</b> (frontend) and <b>Express + TypeScript</b> (backend);<br>
        ${BULLET}<b>PostgreSQL</b> with <b>Supabase Storage</b> for cloud media management;<br>
        ${BULLET}Secure <b>JWT authentication</b> with role-based access control (admin/user);<br>
        ${BULLET}Product catalog with <b>pagination</b> and advanced filtering (category/subcategory);<br>
        ${BULLET}Dynamic <b>favorites system</b> and curated weekly featured products;<br>
        ${BULLET}Enterprise-ready infrastructure deployed on Vercel and Render.
      `,
      pt: `
        Plataforma e-commerce full-stack completa para a <b>Mel Colorindo</b>, marca de produtos artesanais. <br><br>
        <b>Destaques técnicos:</b><br>
        ${BULLET}Desenvolvida com <b>React + TypeScript</b> (frontend) e <b>Express + TypeScript</b> (backend);<br>
        ${BULLET}<b>PostgreSQL</b> com <b>Supabase Storage</b> para gestão de mídia na nuvem;<br>
        ${BULLET}Autenticação <b>JWT segura</b> com controle de níveis de acesso (admin/user);<br>
        ${BULLET}Catálogo com <b>paginação</b> e filtros avançados por categoria e subcategoria;<br>
        ${BULLET}Sistema dinâmico de <b>favoritos</b> e destaques da semana gerenciáveis;<br>
        ${BULLET}Infraestrutura resiliente com deploy no Vercel e Render.
      `,
    },
    site: "https://melcolorindo.vercel.app/",
    accent: "#FFB347",
  },
  {
    title: {
      en: "InfoArchive Toolkit",
      pt: "InfoArchive Toolkit",
    },
    folderName: "infoarchive",
    date: {
      en: "2026",
      pt: "2026",
    },
    description: {
      en: `
        Enterprise CLI & API toolkit for <b>OpenText InfoArchive</b> data migration, developed for a major energy corporation.<br><br>
        <b>Core capabilities:</b><br>
        ${BULLET}<b>9 modular commands</b>: CSV-to-XML conversion, multi-format document extraction, XML validation, XSD-based mock data generation;<br>
        ${BULLET}REST API with <b>Flask</b> backend and <b>Vite</b> frontend for web-based operations;<br>
        ${BULLET}Universal document finder supporting PDF, MSG, DOCX, XLSX, CSV, and archive (ZIP) extraction;<br>
        ${BULLET}Auto-configuration from <b>XSD schemas</b> with batch processing and intelligent chunking;<br>
        ${BULLET}<b>Docker</b> containerized and deployed on <b>Red Hat OpenShift</b> with PVCs and Secrets;<br>
        ${BULLET}Comprehensive <b>pytest</b> test suite with CI-ready modular structure.<br><br>
        Built with Python, Flask, and Gunicorn. Production WSGI server with multi-worker threading.
      `,
      pt: `
        Toolkit CLI & API enterprise para migração de dados no <b>OpenText InfoArchive</b>, desenvolvido para uma grande corporação do setor de energia.<br><br>
        <b>Funcionalidades principais:</b><br>
        ${BULLET}<b>9 comandos modulares</b>: conversão CSV-para-XML, extração multi-formato de documentos, validação XML, geração de mock data baseada em XSD;<br>
        ${BULLET}API REST com backend <b>Flask</b> e frontend <b>Vite</b> para operações via web;<br>
        ${BULLET}Buscador universal de documentos suportando PDF, MSG, DOCX, XLSX, CSV e extração de arquivos (ZIP);<br>
        ${BULLET}Auto-configuração a partir de <b>schemas XSD</b> com processamento em lote e chunking inteligente;<br>
        ${BULLET}Containerizado com <b>Docker</b> e deploy no <b>Red Hat OpenShift</b> com PVCs e Secrets;<br>
        ${BULLET}Suite de testes <b>pytest</b> completa com estrutura modular pronta para CI.<br><br>
        Desenvolvido em Python, Flask e Gunicorn. Servidor WSGI de produção com multi-worker threading.
      `,
    },
    repository: "",
    site: "",
    accent: "#E31837",
  },
  {
    title: {
      en: "OTCS File Uploader",
      pt: "OTCS File Uploader",
    },
    folderName: "otcsuploader",
    date: {
      en: "2026",
      pt: "2026",
    },
    description: {
      en: `
        Full-stack web application for bulk document upload and metadata management in <b>OpenText Content Server</b>, developed for a major energy corporation.<br><br>
        <b>Key features:</b><br>
        ${BULLET}Dual authentication: <b>OTDS SSO (SAML)</b> and traditional credentials with <b>Fernet encryption</b> at rest;<br>
        ${BULLET}Two upload workflows: <b>Batch</b> (CSV-driven, multi-phase) and <b>Guided</b> (per-file with dynamic metadata forms);<br>
        ${BULLET}Real-time progress via <b>Server-Sent Events (SSE)</b>, job tracking, and retry mechanism;<br>
        ${BULLET}<b>3-tier intelligent caching</b> (Folders/Categories/Schemas) with configurable TTL, reducing API calls by ~70-90%;<br>
        ${BULLET}Interactive API docs via <b>Swagger UI (OpenAPI 3.0)</b> with 30+ documented endpoints;<br>
        ${BULLET}Enterprise security: input validation, path traversal protection, log sanitization, credential encryption.<br><br>
        Built with Python/Flask, vanilla JS/CSS frontend. Packagable as standalone executable via PyInstaller.
      `,
      pt: `
        Aplicação web full-stack para upload em massa de documentos e gestão de metadados no <b>OpenText Content Server</b>, desenvolvida para uma grande corporação do setor de energia.<br><br>
        <b>Funcionalidades principais:</b><br>
        ${BULLET}Autenticação dupla: <b>OTDS SSO (SAML)</b> e credenciais tradicionais com <b>criptografia Fernet</b> em repouso;<br>
        ${BULLET}Dois fluxos de upload: <b>Batch</b> (via CSV, multi-fase) e <b>Guiado</b> (por arquivo com formulários dinâmicos de metadados);<br>
        ${BULLET}Progresso em tempo real via <b>Server-Sent Events (SSE)</b>, rastreamento de jobs e mecanismo de retry;<br>
        ${BULLET}<b>Cache inteligente de 3 níveis</b> (Pastas/Categorias/Schemas) com TTL configurável, reduzindo chamadas à API em ~70-90%;<br>
        ${BULLET}Documentação interativa via <b>Swagger UI (OpenAPI 3.0)</b> com 30+ endpoints documentados;<br>
        ${BULLET}Segurança enterprise: validação de input, proteção contra path traversal, sanitização de logs, criptografia de credenciais.<br><br>
        Desenvolvido com Python/Flask, frontend em JS/CSS vanilla. Empacotável como executável standalone via PyInstaller.
      `,
    },
    repository: "",
    site: "",
    accent: "#0066B2",
  },
  {
    title: {
      en: "Signature Orchestrator API",
      pt: "Signature Orchestrator API",
    },
    folderName: "adobe",
    date: {
      en: "May 2025",
      pt: "Maio de 2025",
    },
    description: {
      en: `
        Full integration between <b>Adobe Sign</b> and <b>OpenText Content Server (xECM)</b>, automating the entire digital signature workflow via API.<br><br>
        Main features:<br>
        ${BULLET}Send documents for electronic signature directly from OTCS;<br>
        ${BULLET}Automatically download the signed PDF and upload it to the target folder in Content Server;<br>
        ${BULLET}Secure authentication with OAuth2 (Adobe) and OTDS (OpenText);<br>
        ${BULLET}Asynchronous status monitoring via Webhook;<br>
        ${BULLET}Supports multiple signers, detailed logs, anti-duplication checks;<br>
        ${BULLET}100% hands-off, enterprise-ready, compliance-focused.<br><br>
        Backend: Node.js/Express, minimal HTML/JS frontend via WebReport.
      `,
      pt: `
        Integração completa entre <b>Adobe Sign</b> e <b>OpenText Content Server (xECM)</b>, automatizando todo o fluxo de assinatura digital via API.<br><br>
        Principais funcionalidades:<br>
        ${BULLET}Envio de documentos para assinatura eletrônica diretamente do OTCS;<br>
        ${BULLET}Download automático do PDF assinado e upload na pasta de destino no Content Server;<br>
        ${BULLET}Autenticação segura com OAuth2 (Adobe) e OTDS (OpenText);<br>
        ${BULLET}Monitoramento assíncrono do status da assinatura por Webhook;<br>
        ${BULLET}Suporte a múltiplos signatários, logs detalhados e checagem anti-duplicidade;<br>
        ${BULLET}Totalmente sem intervenção manual, focado em ambientes enterprise e compliance.<br><br>
        Backend em Node.js/Express, frontend mínimo em HTML/JS via WebReport.
      `,
    },
    repository: "https://github.com/pebarone/signature-orchestrator-api",
    accent: "#FF0000",
  },
  {
    title: {
      en: "LogViewer for Signature Orchestrator API",
      pt: "Visualizador de Logs para Signature Orchestrator API",
    },
    folderName: "logview",
    date: {
      en: "July 2025",
      pt: "Julho de 2025",
    },
    description: {
      en: `A web application complementing the **Signature Orchestrator API** integration, providing real-time auditing and visualization of server logs. It uses Server-Sent Events (SSE) for live updates, allowing users to pause, search, filter by log level (INFO, WARN, ERROR, EVENT), and clear logs. This viewer is crucial for monitoring the background processes and integrations of the Signature Orchestrator API, ensuring full visibility into document signature workflows and Content Server operations.<br><br>
      The backend streams log data, which the frontend then parses, highlights (for search terms), and displays, organizing entries into groups for readability. It's an essential tool for troubleshooting and verifying the automated workflows of the Adobe Sign and OpenText Content Server integration.`,
      pt: `Uma aplicação web que complementa a integração **Signature Orchestrator API**, fornecendo auditoria e visualização em tempo real dos logs do servidor. Ela utiliza Server-Sent Events (SSE) para atualizações ao vivo, permitindo que os usuários pausem, pesquisem, filtrem por nível de log (INFO, WARN, ERROR, EVENT) e limpem os logs. Este visualizador é crucial para monitorar os processos em segundo plano e as integrações da Signature Orchestrator API, garantindo visibilidade total nos fluxos de trabalho de assinatura de documentos e nas operações do Content Server. <br><br>
      O backend transmite dados de log, que o frontend então analisa, destaca (para termos de pesquisa) e exibe, organizando as entradas em grupos para facilitar a leitura. É uma ferramenta essencial para solucionar problemas e verificar os fluxos de trabalho automatizados da integração Adobe Sign e OpenText Content Server.`,
    },
    repository: "https://github.com/pebarone/signature-orchestrator-api",
    accent: "#00F0FF",
  },
  {
    title: {
      en: "PwC Dashboard — Ticket Management",
      pt: "PwC Dashboard — Gestão de Chamados",
    },
    folderName: "dashdpt",
    date: {
      en: "July 2025",
      pt: "Julho de 2025",
    },
    description: {
      en: `
          Interactive dashboard built for operational ticket tracking in the <b>Text Processing (DPT)</b> department at PwC.<br><br>
          The system was designed to replace manual spreadsheet controls, offering centralized, responsive, and highly customized visualization.<br><br>
          <b>Main features:</b><br>
          ${BULLET}Dynamic table with visual highlights by status (new, late, under review, assigned, not handled);<br>
          ${BULLET}Automatic sorting by deadline, sequence, and opening date (click on header);<br>
          ${BULLET}Filter by ticket flow stage and instant text search;<br>
          ${BULLET}Interactive legend: click icons to filter tickets by status;<br>
          ${BULLET}Automatic color logic with smooth row animations during filter/search;<br>
          ${BULLET}Clean and responsive layout, focused on streamlining the DPT team's workflow.<br><br>
          <b>Stack:</b> HTML5, CSS3 (custom), JavaScript ES6+ (no frameworks).<br><br>
          Fully client-side project, ready for future API or database integrations. No sensitive data exposed in this version.
      `,
      pt: `
          Dashboard interativo criado para o controle operacional de chamados na área de <b>Processamento de Texto (DPT)</b> da PwC.<br><br>
          O sistema foi projetado para substituir controles manuais em planilhas, trazendo uma visualização centralizada, responsiva e altamente customizada.<br><br>
          <b>Principais funcionalidades:</b><br>
          ${BULLET}Tabela dinâmica com destaque visual por status (novo, atrasado, dúvida, assumido, não tratado);<br>
          ${BULLET}Ordenação automática por prazo, sequência e data de abertura (basta clicar no cabeçalho);<br>
          ${BULLET}Filtro por etapa do fluxo de chamados e pesquisa instantânea por texto;<br>
          ${BULLET}Legenda interativa: clique nos ícones para filtrar chamados por status;<br>
          ${BULLET}Lógica de cores automática, com animação suave nas linhas ao filtrar ou buscar;<br>
          ${BULLET}Layout clean e responsivo, focado em facilitar a rotina do usuário DPT.<br><br>
          <b>Stack:</b> HTML5, CSS3 (custom), JavaScript ES6+ (sem frameworks).<br><br>
          Projeto 100% client-side e pronto para integração futura com APIs ou bases externas. Nenhum dado sensível exposto nesta versão.<br>
      `,
    },
    repository: "https://github.com/pebarone/Dashboard-Controle-Chamados",
    site: "https://dashboard-controle-chamados.vercel.app/",
    accent: "#F3C148",
  },
  {
    title: {
      en: "Virtual Investment Advisor",
      pt: "Assessor de Investimentos Virtual",
    },
    folderName: "assessorvirtual",
    date: {
      en: "November 2025",
      pt: "Novembro de 2025",
    },
    description: {
      en: `
        Full-stack investment platform simulating a complete financial ecosystem with premium architecture.<br><br>
        <b>Core features:</b><br>
        ${BULLET}API built with <b>Node.js/Express</b> following <b>Clean Architecture</b> and <b>SOLID</b> principles;<br>
        ${BULLET}<b>Oracle Database</b> integration with complex constraints and relationships;<br>
        ${BULLET}Robust security with <b>JWT (Access/Refresh Tokens)</b>, bcrypt, and rate limiting;<br>
        ${BULLET}<b>Strategy Design Pattern</b> for automated portfolio recommendations based on risk profile;<br>
        ${BULLET}Full investment lifecycle (deposit, asset trading, real-time dashboard);<br>
        ${BULLET}Account verification and recovery via <b>Gmail API + OAuth2</b>.<br><br>
        Interactive documentation via <b>Swagger (OpenAPI)</b> and containerized with Docker.
      `,
      pt: `
        Plataforma de investimentos full-stack que simula um ecossistema financeiro completo com arquitetura premium.<br><br>
        <b>Funcionalidades principais:</b><br>
        ${BULLET}API em <b>Node.js/Express</b> seguindo <b>Clean Architecture</b> e princípios <b>SOLID</b>;<br>
        ${BULLET}Integração com <b>Oracle Database</b> com constraints e relacionamentos complexos;<br>
        ${BULLET}Segurança robusta com <b>JWT (Access/Refresh Tokens)</b>, bcrypt e rate limiting;<br>
        ${BULLET}<b>Design Pattern Strategy</b> para recomendações automáticas de carteira por perfil de risco;<br>
        ${BULLET}Ciclo completo de investimento (depósito, compra/venda, dashboard em tempo real);<br>
        ${BULLET}Verificação de conta e recuperação via <b>Gmail API + OAuth2</b>.<br><br>
        Documentação interativa com <b>Swagger (OpenAPI)</b> e suporte a Docker.
      `,
    },
    repository: "https://github.com/pebarone/assessor-virtual-api",
    site: "https://assessor-virtual-api.onrender.com",
    accent: "#7C5CFC",
  },

  {
    title: {
      en: "TranscriPy",
      pt: "TranscriPy",
    },
    folderName: "transcripy",
    date: {
      en: "April 2025",
      pt: "Abril de 2025",
    },
    description: {
      en: `TranscriPy is a command-line (CLI) application for transcribing audio using OpenAI's Whisper. It quickly converts files into text, supports multiple languages, formats (.txt and .srt), and GPU acceleration when available.<br><br>
      Developed in Python, the project uses FFmpeg, prompt_toolkit, and PyTorch.<br><br>Ideal for automating transcriptions of interviews, meetings, or podcasts directly from the terminal.`,
      pt: `TranscriPy é uma aplicação de linha de comando (CLI) para transcrição de áudios com Whisper da OpenAI. Permite converter arquivos em texto de forma rápida, com suporte a múltiplos idiomas, formatos (.txt e .srt) e aceleração por GPU quando disponível.<br><br>
      Desenvolvido em Python, o projeto utiliza FFmpeg, prompt_toolkit e PyTorch. <br><br>Ideal para automatizar transcrições de entrevistas, reuniões ou podcasts diretamente do terminal.`,
    },
    repository: "https://github.com/pebarone/TranscriPy",
    site: "https://github.com/pebarone/TranscriPy",
    accent: "#3776AB",
  },
  {
    title: {
      en: "YouTube Video Downloader",
      pt: "YouTube Video Downloader",
    },
    folderName: "youtubedownloader",
    date: {
      en: "April 2024",
      pt: "Abril de 2024",
    },
    description: {
      en: `Web application with a Python backend that allows downloading YouTube videos in various resolutions, using the <code>yt_dlp</code> library and <code>FFmpeg</code> to merge audio and video when needed.<br><br>
      Works locally via browser (port 25565), with optional external network access through port forwarding. The interface lets users search by URL, select resolution, and start the download with a single click.`,
      pt: `Aplicação web com back-end em Python que permite baixar vídeos do YouTube em diversas resoluções, utilizando a biblioteca <code>yt_dlp</code> e o <code>FFmpeg</code> para juntar áudio e vídeo quando necessário.<br><br>
      Funciona localmente via navegador (porta 25565), com opção de liberação para rede externa via port forwarding. A interface permite buscar vídeos pela URL, selecionar resolução e iniciar o download com um clique.`,
    },
    repository: "https://github.com/pebarone/YOUTUBE-DOWNLOADER",
    site: "https://youtube-downloader-9dqe.onrender.com",
    accent: "#FF0000",
  },
    {
    title: {
      en: "hAppVida Fitness",
      pt: "hAppVida Fitness",
    },
    folderName: "happvida",
    date: {
      en: "October 2023",
      pt: "Outubro de 2023",
    },
    description: {
      en: `hAppVida Fitness is an academic React application that simulates a health and wellness platform. It supports user registration and login, with a simulated backend using <code>json-server</code>.<br><br>
      To test the app, use the default user from the <code>users.json</code> file:<br>
      <strong>Login:</strong> user@teste.com<br>
      <strong>Password:</strong> 12345<br><br>
      New users can also be registered through the interface.<br><br>
      The project was built with:<br><br>
      ${BULLET}React.js (frontend)<br>
      ${BULLET}json-server (mock RESTful API)<br>
      ${BULLET}Node.js (scripts and management)<br>
      ${BULLET}npm-run-all (simultaneous API and frontend execution)<br><br>
      The API runs on port 3000, so make sure no other app is using this port. The frontend may run on a different port (e.g., 5173).`,
      pt: `hAppVida Fitness é uma aplicação acadêmica em React que simula o funcionamento de uma plataforma de saúde e bem-estar. Nela é possível realizar cadastro e login de usuários, com backend simulado via <code>json-server</code>.<br><br>
      Para testar a aplicação, utilize o usuário padrão do arquivo <code>users.json</code>:<br>
      <strong>Login:</strong> user@teste.com<br>
      <strong>Senha:</strong> 12345<br><br>
      Também é possível cadastrar novos usuários pela interface.<br><br>
      O projeto foi desenvolvido com:<br><br>
      ${BULLET}React.js (frontend)<br>
      ${BULLET}json-server (mock de API RESTful)<br>
      ${BULLET}Node.js (scripts e gerenciamento)<br>
      ${BULLET}npm-run-all (execução simultânea da API e frontend)<br><br>
      A API roda na porta 3000, então certifique-se de que nenhuma outra aplicação esteja usando essa porta. O frontend pode rodar em outra porta (ex: 5173).`,
    },
    repository: "https://github.com/pebarone/hAppVidaFitness",
    site: "https://happvida.netlify.app/login",
    accent: "#00F0FF",
  },
];


const projectImages = import.meta.glob('/public/assets/projects/**/*.{png,jpg,jpeg,gif,webp,svg}');
const imagePaths = Object.keys(projectImages).map(p => p.replace('/public', ''));

export const projects = rawProjects.map(p => {
  const pImages = imagePaths
    .filter(url => url.startsWith(`/assets/projects/${p.folderName}/`))
    .sort(); 

  return {
    ...p,
    image: pImages.length > 0 ? pImages[0] : '',
    screenshots: pImages
  };
});
