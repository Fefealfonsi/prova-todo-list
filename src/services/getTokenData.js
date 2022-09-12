// import jwt from "jsonwebtoken";

// export function getTokenData(token){
//     const payload =  jwt.verify(token, 'TodoApi')
//     return payload 
// }
//--------------------------------------------------------------
// export function getTokenData (token) {
//     const payload = token.split('.')[1] //pegar a segunda parte do token
//     console.log('PAY',payload)
//     return JSON.parse(atob(payload)) //atob decodifica uma string base64
// };
// ------------------------------------------------------------------------
// import jwt_decode from 'jwt-decode';
// export async function getTokenData (token){


//    const decoded = await jwt_decode(token);
//     console.log(decoded); 
//     return decoded
// }


