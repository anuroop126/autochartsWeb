// Happy coding!
function helpers(){
  let graph = undefined
  if(Object.keys(this).length > 2){
    //Helps to virtually making this a private function.
    /*
      Let's not make it complicated.
      I dont want this function to bexecuted from outer world or even object!!
      This helps you by not messing up with your code!
    */
    return;
  }
  console.log(this);
  
}
class __bar{
  constructor (id, options) {
        this.id = id;
        this.options = options;
        this.id="#"+id;
        console.log("given options are:",this.options,"and id is:",this.id);
        // Remove previous svg or code. !
        d3.select(this.id).selectAll("*").remove();
        helpers.bind(this)();
    }
}
