
function filterBy(arr, dataType) {
        let a = new Array();

        for(let item of arr) {
            if(typeof item != dataType)
                a.push(item);
        }
        return a;
}

let arr = ['hello', 'world', 23, '23', null];
let dataType = prompt("Enter the data type: ");
console.log(filterBy(arr, dataType));