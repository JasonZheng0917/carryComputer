function method() {
    let num1 = document.getElementById('num1').value
    let num2 = document.getElementById('num2').value
    let max = Math.max(num1,num2)
    let min = Math.min(num1,num2)
    let count =0
    let i =0
    let arr1 =[]
    for(let q=0;q<String(max).length;q++){
        arr1.push(String(max)[q])
    }
    let rev1 = arr1.reverse()
    let arr2 =[]
    for(let q=0;q<String(min).length;q++){
        arr2.push(String(min)[q])
    }
    let rev2 = arr2.reverse()
    for(i=0;i<String(max).length;i++){
        if(Number(rev1[i])+Number(rev2[i])>9) {
            rev1[i+1]++
            count++
        }
        if(rev1[i]>9) {
            rev1[i+1]++
            count++
        }
    }
    if(num1[0]&&num2[0]==0) {
        document.getElementById('result').textContent = '本次計算已結束'
    }else {
        document.getElementById('result').textContent = '總共進位了'+count+'次' 
    }
}