const taxas = {
    BRL: { USD: 0.17, EUR: 0.16 },
    USD: { BRL: 5.88, EUR: 0.88 },
    EUR: { BRL: 6.25, USD: 1.14 }
  };
  
  let historico = [];
  
  function converter() {
    const valor = parseFloat(document.getElementById("valor").value);
    const moedaOrigem = document.getElementById("moedaOrigem").value;
    const moedaDestino = document.getElementById("moedaDestino").value;
  
    if (moedaOrigem === moedaDestino) {
      alert("Selecione moedas diferentes para conversão.");
      return;
    }
  
    const taxa = taxas[moedaOrigem][moedaDestino];
    const valorConvertido = valor * taxa;
    const data = new Date().toLocaleString();
  
    
    document.getElementById("resultado").innerText = 
      `Taxa atual: 1 ${moedaOrigem} = ${taxa} ${moedaDestino} \nValor convertido: ${valorConvertido.toFixed(2)} ${moedaDestino}`;
  
    
    const conversao = {
      data,
      moedaOrigem,
      moedaDestino,
      valor,
      valorConvertido
    };
  
    
    historico = [...historico, conversao];
  
    
    atualizarHistorico();
  }
  
  function atualizarHistorico() {
    const lista = document.getElementById("historico");
    lista.innerHTML = ""; 
  
    historico.forEach(({ data, moedaOrigem, moedaDestino, valor, valorConvertido }) => {
      const item = document.createElement("li");
      item.textContent = `${data} - ${valor} ${moedaOrigem} ➜ ${valorConvertido.toFixed(2)} ${moedaDestino}`;
      lista.appendChild(item);
    });
  }
  