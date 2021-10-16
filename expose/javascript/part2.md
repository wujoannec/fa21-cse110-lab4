1. Outputs "3" since i was declared with keyword var so it exists outside of the function scope and it leaves the function when i got incremented to 3
2. Outputs "150" since the last iteration of the for loop body did discountedPrice=300*(0.5) essentially and since discountedPrice was declared as a var, the variable exists outside of the loop.
3.  Also outputs "150" since the last iteration of the for loop body did Math.round(300*100)/100 which turns into Math.round(30000)/100 which becomes 30000/100 which becomes 300 essentially and since finalPrice was declared as a var, the variable exists outside of the loop.
4.  [50,100,150] It will return an array since the math logic in the code (essentially divides the prices by 2 and pushes those discounted prices into the discounted array). Since discounted array was declared in the same function scope as the return statement using discounted, this works (with keyword var) 
5.  Error (variable i using keyword let doesn't exist out of the block scope of the for loop block)
6.  Error (variable discountedPrice using keyword let doesn't exist out of the block scope of the for loop block)
7.  Outputs "150" since finalPrice was updated inside very last iteration of the for loop to 150 and then since the console.log and declaration are in the same block scope outside of the loop (using keyword let), the variable still exists when the for loop is done
8.  [50,100,150] It will return an array since the math logic in the code (essentially divides the prices by 2 and pushes those discounted prices into the discounted array). Since discounted array was declared in the same block scope as the return statement using discounted, this works (with keyword let) 
9.  Error (variable i using keyword let doesn't exist out of the block scope of the for loop block)
10. 3 (length was set once to prices.length using keyword const and it is declared in the same block scope as when it was console.logged so it will output correctly)
11. [It will return an array discounted after the math logic in the code (which essentially divides the prices by 2 and pushes them into the discountedPrices array). Even though discounted is declared constant, it just means you cannot reassign the variable. However, this const keyword has no bearing on what you can do with the array contents, so you are allowed to push as normal. Since discounted array was declared in the same block scope as the return statement using discounted, this works (with keyword const) 
12. 
    A. student.name;
    B. student["Grad Year"];
    C. student["greeting"];
    D. student["Favorite Teacher"]["name"];
    E. student["courseLoad"][0];
13. A. 32; 2 was converted to string and they were concatenated with +
    B. 1; the minus sign indicated that this was a mathematical operation so '3' was converted to an int and 3-2=1
    C. 3; null becomes numerically converted to 0 when in a mathematical operation
    D. 3null; two strings become concatenated
    E. 4; true is a bool which has a numerical conversion of 1 in a mathematical operation
    F. 0; null is 0 and so is false in a mathematical operation, 0+0=0
    G. 3undefined; two strings become concatenated
    H. NaN; this is a mathematical operation but numerically undefined becomes NaN and any operation with NaN becomes NaN
14. A. true, '2' becomes 2 & 2>1
    B. false, '2' is actually > '12' because it's compared lexographically
    C. true, '2' is converted to a number
    D. false, their types are different for strict equality
    E. false, true becomes number 1. 1 != 2
    F. true, boolean conversion of a non 0 number is true
15. == is for equality checks where implicit conversions occur, while === is strict equality and there is no implicit conversion. types must match too
16. (js file)
17. Init newArr, in each iteration of loop, take the respective element of modifyArray and use the callback function to execute doSomething which doubles the element num. Push that to the newArr, which is returned at the end as [2,4,6]
18. (js file)
19. 1
    4
    3
    2