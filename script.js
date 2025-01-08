function gerarNota() {
    const valorVenda = parseFloat(document.getElementById('valorVenda').value);
    const itens = document.getElementById('itens').value;
    const irpf = parseFloat(document.getElementById('irpf').value);
    const pis = parseFloat(document.getElementById('pis').value);
    const cofins = parseFloat(document.getElementById('cofins').value);
    const inss = parseFloat(document.getElementById('inss').value);
    const issqn = parseFloat(document.getElementById('issqn').value);

    // Calculando os impostos
    const valorIRPF = (valorVenda * irpf) / 100;
    const valorPIS = (valorVenda * pis) / 100;
    const valorCOFINS = (valorVenda * cofins) / 100;
    const valorINSS = (valorVenda * inss) / 100;
    const valorISSQN = (valorVenda * issqn) / 100;

    const totalImpostos = valorIRPF + valorPIS + valorCOFINS + valorINSS + valorISSQN;
    const valorLiquido = valorVenda - totalImpostos;

    // Exibindo a Nota Fiscal
    const notaFiscal = `
        <h2>Nota Fiscal de Serviço</h2>
        <p><strong>Itens Vendidos:</strong> ${itens}</p>
        <p><strong>Valor da Venda:</strong> R$ ${valorVenda.toFixed(2)}</p>
        <p><strong>Impostos:</strong></p>
        <ul>
            <li>IRPF: R$ ${valorIRPF.toFixed(2)}</li>
            <li>PIS: R$ ${valorPIS.toFixed(2)}</li>
            <li>COFINS: R$ ${valorCOFINS.toFixed(2)}</li>
            <li>INSS: R$ ${valorINSS.toFixed(2)}</li>
            <li>ISSQN: R$ ${valorISSQN.toFixed(2)}</li>
        </ul>
        <p><strong>Total de Impostos:</strong> R$ ${totalImpostos.toFixed(2)}</p>
        <p><strong>Valor Líquido:</strong> R$ ${valorLiquido.toFixed(2)}</p>
    `;
    document.getElementById('notaFiscal').innerHTML = notaFiscal;
}
