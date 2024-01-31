export function getObjectByKey(arr, key) {
    for (let i = 0; i < arr.length; i++) {
        let obj = arr[i];

        if (obj.name === key) {
            return obj;
        }
    }
}
