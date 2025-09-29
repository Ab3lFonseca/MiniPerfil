# 📱 Mini Perfil - App em React Native com Expo Router

Este projeto é uma atividade prática do curso **+DEVS2BLU** para aprender a criar um aplicativo móvel simples com **React Native** e **Expo Router**.  
O app possui duas telas: uma tela **Home** com formulário e uma tela **Perfil** que exibe os dados informados pelo usuário.

---

## 🚀 Funcionalidades

- Tela **Home**:
  - Campo para digitar o nome do usuário.
  - Campo para informar a URL de um avatar.
  - Botão para navegar até a tela de perfil.

- Tela **Perfil**:
  - Exibe o avatar informado.
  - Exibe o nome do usuário.
  - Mensagem de destaque: *"✨ Este é o seu perfil ✨"*.

- Navegação entre telas feita com **Expo Router**.
- Layout responsivo utilizando **Flexbox** e **StyleSheet**.
- Controle de estado com `useState`.

---

## 🛠️ Tecnologias utilizadas

- [Expo](https://expo.dev/) (SDK 54)
- [React Native](https://reactnative.dev/)
- [Expo Router](https://expo.github.io/router/docs)
- [React Navigation (interno ao Router)](https://reactnavigation.org/)

---

## 📂 Estrutura do projeto

mini-perfil/
│
├── app/
│ ├── _layout.js # Configuração de navegação (Stack)
│ ├── index.js # Tela Home (formulário)
│ └── perfil.js # Tela Perfil (exibição dos dados)
│
├── App.js # Entrada do Expo Router
├── package.json # Dependências e scripts
└── README.md # Documentação

yaml
Copiar código

---

## ▶️ Como rodar o projeto

### 1. Clonar o repositório
```bash
git clone https://github.com/seu-usuario/mini-perfil.git
cd mini-perfil
2. Instalar dependências
bash
Copiar código
npm install
3. Rodar o app
bash
Copiar código
npx expo start
Pressione a para abrir no Android Emulator ou Expo Go (Android).

Pressione i para abrir no iOS Simulator (Mac).

Pressione w para abrir no navegador (Web).

👨‍💻 Autor: Abel Braga

Desenvolvido como parte da unidade curricular Desenvolvimento em React Native
Instrutor: Marcio Schoenfelder
Curso: +DEVS2BLU