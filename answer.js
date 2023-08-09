const functionName = (n,m) => {
  let totalOfSum = 0
  let x = 0
  if(n<m){
    for(i=0;x<m;i++){
      totalOfSum+=x
      x=n*i
    }
  }
  else{
    totalOfSum="INVALID"
  }
  return totalOfSum
}
/*2nd Solution  */
function sumMul(n,m){
  if (n <= 0 || m <= 0) return "INVALID";
  
  const last = Math.ceil(m/n) * n - n;
  return (last + n) * (last / n) / 2;
}

/*3rd Solution  */
function sumMul(n,m){
  if (n >= m) return "INVALID";
var sum = 0;
  for (var i = n; i < m; i+=n) {
    sum += i;
  }
  return sum;
}
