import {INCREMENT} from './Types'
export const incriment=(data)=>{
return {
    type:INCREMENT,
    payload:data,
}

}