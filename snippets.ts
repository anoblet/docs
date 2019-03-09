export interface MyType {
  _string: string;
  _boolean: boolean;
}

const myTypedFunc = ({ _string, _boolean}: MyType) => {
  console.log(_string);
  console.log(_boolean);
};

myTypedFunc({_string: "Hi", _boolean: false});
myTypedFunc({_string: true, _boolean: "Woops");
