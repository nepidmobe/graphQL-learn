//-named export- as it has a name- can have many as needed
//default export-has no name and you can only have one export
const message = "it is the message for u dipen";
const defau = "default export";
const namedFun = () => {
  "nothing";
};
export { message, namedFun, defau as default };

// import defauExp ,{ message ,namedFun} from "./myModule";
// console.log(message, defauExp);
