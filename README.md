# aula-github-actions
# Cadastro de Pessoa Física com Testes Automatizados

Projeto desenvolvido para praticar **validação de dados, testes automatizados, GitHub Actions e proteção de branches**.

## Funcionalidades

O sistema realiza o cadastro de pessoa física com validações de:

- Nome
- CPF, E-mail, Data de nascimento, CNH e idade mínima

As mesmas regras de validação são utilizadas pelo formulário e pelos testes automatizados.

## Tecnologias

- HTML
- JavaScript
- Node.js
- Git e GitHub
- GitHub Actions

## Testes

Os testes utilizam o test runner nativo do Node.js, sem dependências externas.

Para executar:

```bash
node --test
```

## Integração Contínua

O projeto possui um workflow do **GitHub Actions** que executa automaticamente os testes em pushes e Pull Requests para a `main`.

A branch `main` é protegida por Ruleset, exigindo:

- Alterações através de Pull Request
- Testes aprovados antes do merge
- Status check `testar`
- Bloqueio de force push

## Estrutura

```text
.github/
└── workflows/
    └── testes.yml
index.html
pessoaFisica.js
pessoaFisica.test.js
README.md
```

## Objetivo

Demonstrar um fluxo básico de **CI (Integração Contínua)**:

`Código → Testes → Pull Request → GitHub Actions → Merge`

> O workflow avisa, o ruleset protege, o Pull Request é a porta e o teste aprovado é a chave.

Add-Content README.md "teste de branch protegida"
