# Adicionando Projetos ExxonMobil ao Portfólio

Plano para adicionar os 2 projetos profissionais da ExxonMobil ao portfólio, destacando a experiência enterprise e a complexidade técnica.

## User Review Required

> [!IMPORTANT]
> **Confidencialidade**: Esses projetos foram desenvolvidos para a ExxonMobil. Antes de publicar, confirme se não há restrições de NDA ou confidencialidade que impeçam a exposição pública dos repositórios ou detalhes de implementação. Se houver, posso adaptar as descrições para serem mais genéricas.

> [!IMPORTANT]
> **Repositórios GitHub**: Os projetos estão em `repos/em-projects` localmente. Qual é a URL dos repositórios no GitHub (se público)? Se não forem públicos, posso esconder o botão "Repository" e manter apenas a descrição.

> [!IMPORTANT]
> **Imagens de capa**: Vou gerar thumbnails para os cards. O OTCS Uploader já possui um screenshot (`image.png`) que pode servir de base. Para o InfoArchive Toolkit, vou gerar um visual do CLI.

> [!WARNING]
> **Vídeos demo**: Você tem vídeos de demonstração desses projetos? Se não, deixo `videoSrc` vazio.

---

## Estratégia de Posicionamento

### InfoArchive Toolkit — Posição #3
- **Justificativa**: Ferramenta CLI/API enterprise com 9 comandos, deploy containerizado em OpenShift, frontend Vite, REST API com Flask, suite de testes pytest, e arquitetura modular. Demonstra proficiência em Python, DevOps (Docker/OpenShift), e integração com sistemas corporativos (OpenText InfoArchive).
- **Accent Color**: `#E31837` (vermelho ExxonMobil)

### OTCS File Uploader — Posição #4
- **Justificativa**: Webapp full-stack com autenticação SSO (OTDS/SAML), upload em lote via CSV, upload guiado individual, SSE para progresso em tempo real, cache inteligente (3 níveis com TTL), Swagger UI, segurança enterprise (Fernet encryption, sanitização de logs, proteção contra path traversal). Demonstra capacidade de entregar aplicações production-ready em ambiente corporativo.
- **Accent Color**: `#0066B2` (azul corporativo)

---

## Proposed Changes

### Data Layer

#### [MODIFY] [projects.js](file:///c:/Users/augus/Desktop/portifolio-pedro/src/data/projects.js)

Adicionar 2 novos objetos na **posição 3 e 4** do array (após Mel Colorindo e Assessor Virtual, antes do Adobe API Deploy).

**1. InfoArchive Toolkit (posição 2)**:

Descrição EN:
- Enterprise CLI & API toolkit for OpenText InfoArchive data migration at ExxonMobil
- 9 core commands: CSV-to-XML conversion, multi-format document extraction, XML validation, XSD-based mock data generation
- REST API (Flask) with Vite frontend for web-based operations
- Docker containerized, deployed on **Red Hat OpenShift** with PVCs and Secrets
- Comprehensive pytest test suite with CI-ready structure
- Auto-configuration from XSD schemas, batch processing with chunking

Descrição PT equivalente.

**2. OTCS File Uploader (posição 3)**:

Descrição EN:
- Full-stack web application for bulk document upload and metadata management in OpenText Content Server
- Dual authentication: **OTDS SSO (SAML)** and traditional credentials with encrypted storage (Fernet)
- Two upload workflows: Batch (CSV-driven, multi-phase) and Guided (per-file with dynamic metadata forms)
- Real-time progress via **Server-Sent Events (SSE)**, job tracking, retry mechanism
- **3-tier intelligent caching** (Folders/Categories/Schemas) with configurable TTL
- Interactive API docs via **Swagger UI (OpenAPI 3.0)**
- Enterprise security: input validation, path traversal protection, log sanitization, credential encryption

Descrição PT equivalente.

---

### Assets

#### [NEW] `public/assets/projects/infoarchive.png`
Thumbnail gerada para o InfoArchive Toolkit (visual CLI/terminal temático).

#### [NEW] `public/assets/projects/otcsuploader.png`
Thumbnail baseada no screenshot existente (`image.png`) do OTCS Uploader.

---

## Verification Plan

### Manual Verification
1. Rodar `npm run dev` e verificar os 2 novos cards no grid
2. Abrir os modais e verificar descrições em EN e PT
3. Verificar posicionamento (posição 3 e 4, logo após Assessor Virtual)
4. Testar responsividade do grid com os novos cards
5. Confirmar que os links de Repository/Live site funcionam (ou estão escondidos se privados)
