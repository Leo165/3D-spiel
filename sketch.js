function getbruch() {
  let text = document.getElementById("text");  
  let str = document.getElementById("bruch").value;
  let bruch = new Bruch(str);
  text.innerHTML = "der Bruch hat den Wert: "+ bruch.print();  
}

class Bruch {
  constructor(str) {
    //hier eigene Befehle einfügen

    let i=str.search("/")

    this.n = Number(str.slice(i+1, str.length));
    this.z = Number(str.slice(0, i));
    this.kuerze();

   
  }
  static add(b1, b2) {
    let z = b1.z * b2.n + b2.z * b1.n;
    let n = b1.n * b2.n;
    return new Bruch(z + '/' + n);
  }

  add(b) {
    this.z = this.z * b.n + b.z * this.n;
    this.n = this.n * b.n;

  }
  print(){
    return this.z +'/' + this.n

  }
  
  kuerze(){
    let teiler=this.ggt(this.n,this.z);
    this.n /=teiler;
    this.z /=teiler;

  }

  ggt(a,b) {
    while(a!=b){
      if(a>b){
        a=a-b;
      }
      else {
        b=b-a;
      }
    }
    return a;
  }
}
