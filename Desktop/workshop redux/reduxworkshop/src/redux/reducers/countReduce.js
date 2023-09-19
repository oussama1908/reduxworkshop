import {INCREMENT} from '../actions/Types'
const count=0;
const counReducer=(state=count,action)=>{
switch(action.type){

case INCREMENT:
return state=state+action.payload;

default:
  return   state;


}
}
export default counReducer