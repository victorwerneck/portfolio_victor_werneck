# 🚀 GUIA COMPLETO: Como Colocar Seu Portfólio no Ar

## ✅ PASSO 1: Baixar os Arquivos do Figma Make

1. **No Figma Make**, procure um botão de **"Export"** ou **"Download"**
2. Baixe **TODOS os arquivos** do projeto
3. Salve em uma pasta no seu computador (ex: `portfolio-victor`)

---

## 🐙 PASSO 2: Criar Repositório no GitHub

### 2.1 - Acessar o GitHub
1. Entre em [github.com](https://github.com)
2. Faça login na sua conta

### 2.2 - Criar Novo Repositório
1. Clique no botão **"+"** (canto superior direito)
2. Clique em **"New repository"**
3. Preencha:
   - **Repository name:** `portfolio-victor-werneck`
   - **Description:** "Portfólio de UX Designer"
   - Deixe como **Public** ✅
   - **NÃO marque** "Add a README file"
4. Clique em **"Create repository"**

### 2.3 - Anotar o Link
- Você verá uma página com comandos
- **DEIXE ESSA ABA ABERTA** (vamos usar depois)

---

## 💻 PASSO 3: Instalar Ferramentas Necessárias

### 3.1 - Instalar Git
1. Acesse: [git-scm.com](https://git-scm.com/downloads)
2. Baixe a versão para seu sistema (Windows/Mac/Linux)
3. Instale (pode clicar "Next" em tudo)

### 3.2 - Instalar Node.js
1. Acesse: [nodejs.org](https://nodejs.org)
2. Baixe a versão **LTS** (recomendada)
3. Instale (pode clicar "Next" em tudo)

### 3.3 - Verificar Instalação
1. **Windows:** Aperte `Windows + R`, digite `cmd`, aperte Enter
2. **Mac:** Aperte `Cmd + Espaço`, digite `terminal`, aperte Enter
3. Digite: `git --version` → Deve mostrar a versão
4. Digite: `node --version` → Deve mostrar a versão

Se aparecer as versões, **SUCESSO!** ✅

---

## 📤 PASSO 4: Enviar Arquivos para o GitHub

### 4.1 - Abrir Terminal na Pasta do Projeto
1. Abra a pasta onde você salvou os arquivos
2. **Windows:** 
   - Clique com botão direito dentro da pasta
   - Clique em "Git Bash Here" (ou "Abrir no Terminal")
3. **Mac:** 
   - Clique com botão direito na pasta
   - Clique em "Novo Terminal nesta Pasta"

### 4.2 - Executar Comandos (cole um por um)

```bash
# 1. Inicializar Git
git init

# 2. Adicionar todos os arquivos
git add .

# 3. Fazer o primeiro commit
git commit -m "Primeiro commit - Portfólio Victor Werneck"

# 4. Conectar ao GitHub (IMPORTANTE: substitua pelo SEU link do GitHub)
git remote add origin https://github.com/SEU-USUARIO/portfolio-victor-werneck.git

# 5. Enviar para o GitHub
git branch -M main
git push -u origin main
```

⚠️ **ATENÇÃO:** No comando 4, substitua `SEU-USUARIO` pelo seu nome de usuário do GitHub!

### 4.3 - Possíveis Problemas

**Se pedir login do GitHub:**
- Digite seu email do GitHub
- Digite sua senha **OU** use um Personal Access Token
- [Como criar token](https://docs.github.com/pt/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)

**Se der erro de permissão:**
- Talvez precise configurar Git:
```bash
git config --global user.name "Seu Nome"
git config --global user.email "seu-email@exemplo.com"
```

---

## 🌐 PASSO 5: Fazer Deploy na Vercel (MAIS FÁCIL!)

### 5.1 - Criar Conta na Vercel
1. Acesse: [vercel.com](https://vercel.com)
2. Clique em **"Sign Up"**
3. Escolha **"Continue with GitHub"**
4. Autorize a Vercel a acessar sua conta GitHub

### 5.2 - Importar Projeto
1. No painel da Vercel, clique em **"Add New..."**
2. Clique em **"Project"**
3. Você verá seus repositórios do GitHub
4. Encontre **"portfolio-victor-werneck"**
5. Clique em **"Import"**

### 5.3 - Configurar Deploy
1. **Project Name:** `portfolio-victor-werneck` (pode deixar)
2. **Framework Preset:** Deve detectar automaticamente "Vite"
3. **Root Directory:** `./` (deixe como está)
4. **Build Command:** `npm run build` (deve estar preenchido)
5. **Output Directory:** `dist` (deve estar preenchido)
6. Clique em **"Deploy"**

### 5.4 - Aguardar Deploy
- A Vercel vai instalar dependências e fazer build
- Aguarde 2-5 minutos ⏳
- Quando terminar, você verá: **"Congratulations! 🎉"**

---

## 🔗 PASSO 6: Conectar Seu Domínio

### 6.1 - Na Vercel
1. Acesse seu projeto na Vercel
2. Clique em **"Settings"** (menu superior)
3. Clique em **"Domains"** (menu lateral)
4. Clique em **"Add"**
5. Digite seu domínio (ex: `seusite.com.br`)
6. Clique em **"Add"**

### 6.2 - Vercel Vai Mostrar Configurações DNS
Você verá algo assim:
```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

### 6.3 - No Seu Provedor de Domínio
1. Acesse onde você comprou o domínio (Registro.br, GoDaddy, etc.)
2. Vá em **"Gerenciar DNS"** ou **"DNS Settings"**
3. **Delete** registros antigos (se houver)
4. **Adicione** os novos registros que a Vercel mostrou:
   - Registro A apontando para o IP da Vercel
   - Registro CNAME para www

### 6.4 - Aguardar Propagação
- Pode levar de **alguns minutos até 48 horas**
- Geralmente funciona em 1-2 horas ⏰

---

## ✅ PRONTO! Seu site está no ar!

### 🎯 Você agora tem:
- ✅ Código no GitHub (backup seguro)
- ✅ Site hospedado na Vercel (profissional)
- ✅ Domínio próprio conectado
- ✅ Deploy automático (cada mudança no GitHub atualiza o site)
- ✅ HTTPS grátis (cadeado de segurança)
- ✅ Performance otimizada

---

## 🔄 BONUS: Como Atualizar o Site no Futuro

Quando você quiser fazer mudanças:

1. Edite os arquivos no Figma Make
2. Baixe novamente os arquivos
3. No terminal, na pasta do projeto:
```bash
git add .
git commit -m "Descrição da mudança"
git push
```
4. **A Vercel atualiza automaticamente!** 🎉

---

## 🆘 Precisa de Ajuda?

### Problemas Comuns:

**"Command not found"**
→ Git ou Node não foram instalados corretamente. Reinstale.

**"Permission denied"**
→ Configure Git com seu email:
```bash
git config --global user.email "seu-email@exemplo.com"
```

**"Failed to deploy"**
→ Verifique se todos os arquivos foram enviados para o GitHub

**"Domain not verified"**
→ Aguarde mais tempo ou verifique as configurações DNS

---

## 📧 Contatos Úteis:
- Suporte Vercel: [vercel.com/support](https://vercel.com/support)
- Documentação GitHub: [docs.github.com](https://docs.github.com/pt)

---

**BOA SORTE! 🚀 Você consegue!**
