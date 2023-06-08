class Statistics {
    constructor(X,Y){
        this.X = X
        this.Y = Y
        this.SUMXY = null
        this.prodXY = null
}

computeProdXY(){
    let res = []
    for(var i = 0; i < this.X.length; i++){
        res.push(arr1[i] * arr2[i])
    }
    return res
}
computeSumXY(){
    let res = []
    for(var i = o; i < this.X.length; i++){
        res.push(arr1[i])
    } 
    return res
    }
    computeSum(){
        let res = 0
        for(var i = 0; i < this.X.length; i++){
            res += arr1[i]
        }
        return res
    }
    computeSumY(){
       let res = 0
       for(var i = 0; i < this.Y.length; i++){
           res += arr[i]
       } 
       return res
    }
    getSumXY(){
        if(this.sumXY === null){
            return this.computeProdXY()
        }
    }
    getProdXY(){
        if(this.prodXY === null){
            return this.computeSumXY()
        }
    }
    computeSumXSumY(){
        let resArr1 =0
        let resArr2 =0

        for (var i =0; i < this.X.length; i++){
            resArr1 += this.X[i]
            resArr2 += this.Y[i]
        }
   
        return(resArr1 + resArr2)         
    }
}

const arr1 = [1,2,3]
const arr2 = [4,5,6]

const result = new Statistics(arr1, arr2)

console.log(result.computeProdXY())
console.log(result.computeSumXY())

console.log(result.computeSumX())
console.log(result.computeSumY())

console.log(result.getSumXY())
console.log(result.getProdXY())

console.log(result.computeSumXSumY())