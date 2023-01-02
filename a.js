function getElement(a, n, S)
{
    // Sort the array
    a.sort();
 
    var sum = 0;
 
    for (var i = 0; i < n; i++) {
 
        // If current element
        // satisfies the condition
        if (sum + (a[i] * (n - i)) == S)
            return a[i];
        sum += a[i];
    }
 
    // No element found
    return -1;
}