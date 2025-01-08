# NFS-e (Nota Fiscal de Serviço Eletrônica)

Este projeto é uma aplicação web simples desenvolvida em **HTML** e **JavaScript** para a emissão de **Nota Fiscal de Serviço Eletrônica (NFS-e)**. O objetivo é permitir que o usuário insira dados necessários para o cálculo dos impostos e a geração da NFS-e com as informações fornecidas.

## Funcionalidades

- **Leitura dos Dados de Entrada**: 
  O usuário pode informar os seguintes dados:
  - Valor da Venda
  - Itens sendo vendidos
  - Porcentagem dos impostos: IRPF, PIS, COFINS, INSS, ISSQN

- **Cálculo de Impostos**: 
  A aplicação calcula os impostos com base nas porcentagens informadas.

- **Geração da NFS-e**:
  Exibe a Nota Fiscal de Serviço com os valores calculados diretamente na página.

## Como Usar

1. Abra o arquivo `index.html` em um navegador de sua escolha.
2. Preencha os campos solicitados, incluindo:
   - Valor da venda
   - Descrição dos itens
   - Porcentagem de cada imposto
3. Clique no botão para gerar a NFS-e e visualizar os cálculos realizados.

## Tecnologias Utilizadas

- **HTML** para a estrutura da página.
- **JavaScript** para os cálculos dos impostos e a interação do usuário.

## Como Rodar o Projeto Localmente

1. Faça o **clone** do repositório:
   ```bash
   git clone https://github.com/Fehscudiero/-NFS-e-.git
