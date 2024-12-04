
export function random( length: number) {

    const option = 'vnckldvioxhvioviodviohoerfv09430944fino';
    let  ans = "";
    for(let i=0; i<length; i++){
        ans += Math.floor(Math.random() * option.length); // 0.2 * 19 = 3.8 = 3
    }

    return ans;
  
}