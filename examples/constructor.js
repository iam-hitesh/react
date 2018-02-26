class Developer{
    constructor (fname,lname){
           this.fname= fname;
           this.lname = lname;
           }
   getName(){
      return this.fname + ' ' + this.lname;
      }
}

const hitesh = new Developer('Hitesh','Yadav');
console.log(hitesh.getName());
