class State{
  arrayOFObservables =[];
  loggedIn = false

  addObservable(fn){
      console.log(fn)
      this.arrayOFObservables.push(fn);
  }

  notify(value){
      console.log('notify value ', value);
      this.loggedIn = value;
      this.arrayOFObservables.forEach(fn => fn.call(value))
  }


};

const state = new State();
export { state };
