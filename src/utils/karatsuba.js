export class Karatsuba{

  resultado;
  x;
  y;
  formula;
  
  execute = (x, y,) => {

    if (x<10 && y<10) {
      return x*y;
    }
    let maxLength = Math.max(x.toString().length, y.toString().length);
    let m = Math.round(maxLength/2);
    
  
    let xHigh = Math.floor(x/ Math.pow(10,m));
    let yHigh = Math.floor(y/ Math.pow(10,m));
  
    
    let xLow = x %  Math.pow(10,m);
    let yLow = y %  Math.pow(10,m);
  
    
  
    let a = this.execute(xHigh, yHigh);
    let d = this.execute(xLow, yLow);
    let e = this.execute(xLow+xHigh, yLow+yHigh)-a-d;
    this.formula = `${a} * 10^${m*2} + ${e} * 10^${m} + ${d}`;
    this.resultado = `${a * Math.pow(10, m*2) + e * Math.pow(10,m) + d}`
  
    return a * Math.pow(10, m*2) + e * Math.pow(10,m) + d;
  }

  getResultado = () => {
    return this.resultado;
  }

  getFormula = () => {
    return this.formula;
  }
}