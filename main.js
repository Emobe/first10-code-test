class Main {

  constructor(){
    this.items = [3,7,'df','3',7,8,'df',23,6,2,67,'g','34',12,34,5];
  }

  calculate(items){
    let parsed;
    let count = 0;
    let avg = this.items.reduce((sum, item) => {
      parsed = parseInt(item);
      if(!Number.isNaN(parsed)){
        count++;
        return sum + parsed
      }
      return sum;
    }, 0)
    this.displayValue(avg / count);
  }

  displayValue(value){
    document.getElementById("output").innerHTML = value;
    document.getElementById("output").classList.add("show");
  }
}
const App = new Main();
