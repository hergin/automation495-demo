exports.fibonacci = function(n) {
    if(n==0 || n==1)
        return n+2;
    return this.fibonacci(n-1) + this.fibonacci(n-2);
}