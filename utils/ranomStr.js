
const strArr = ['a','b','c','d','e','f','g','h','i','j','k','m','n','l','o','p','q','r','s','t','u','v','w','x','y','z',1,2,3,4,5,6,7,8,9,0]
function randomStr(len){
    let str = '';
  for (let i = 0 ;i < len ; i++){
      let num = Math.floor(Math.random()*36)
      str += strArr[num]
  }
  return str;
}
export {randomStr}