
export function random( length: number) {

    const option = 'vnckldvio';
    let  ans = "";
    for(let i=0; i<length; i++){
        ans += Math.floor(Math.random() * option.length); // 0.2 * 19 = 3.8 = 3
    }

    return ans;
  
}