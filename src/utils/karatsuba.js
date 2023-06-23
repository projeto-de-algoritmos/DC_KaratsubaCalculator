class Karatsuba{
  resultado;
  x;
  y;
  formula;
  passo = 1;
  log = "";
  
  execute = (x, y,) => {

    if (x<10 && y<10) {
      this.log += `para recursão, x e y(${x} e ${y}) são menores que 10, retornando ${x*y}\n`
      return x*y;
    }

    let maxLength = Math.max(x.toString().length, y.toString().length);
    let m = Math.round(maxLength/2);
    
    this.log += `${this.passo++}º passo, dividindo ${x} por ${Math.pow(10,m)} (10^metade do tamanho do maior número "${maxLength}")\n`
    let xHigh = Math.floor(x/ Math.pow(10,m));
    this.log += `${this.passo++}º passo, dividindo ${y} em ${Math.pow(10,m)} (10^metade do tamanho do maior número "${maxLength}")\n`
    let yHigh = Math.floor(y/ Math.pow(10,m));
    
    let xLow = x %  Math.pow(10,m);
    let yLow = y %  Math.pow(10,m);
    this.log += `${this.passo++}º passo, dividindo ${x} em ${xLow} e ${y} por ${Math.pow(10,m)}\n`
  
    this.log += `Recursiva para ${xHigh} e ${yHigh}\n`
    let a = this.execute(xHigh, yHigh);
    this.log += `Recursiva para ${xLow} e ${yLow}\n`
    let d = this.execute(xLow, yLow);
    this.log += `Recursiva para ${xHigh+xLow} e ${yHigh+yLow}\n`
    let e = this.execute(xLow+xHigh, yLow+yHigh)-a-d;
    this.formula = `${a} * 10^${m*2} + ${e} * 10^${m} + ${d}`;

    this.resultado = a * Math.pow(10, m*2) + e * Math.pow(10, m) + d;
    return a * Math.pow(10, m*2) + e * Math.pow(10, m) + d;
  
  }

  getResultado = () => {
    return this.resultado;
  }

  getLog = () => {
    return this.log;
  }

  getFormula = () => {
    return this.formula;
  }
}

export {Karatsuba};