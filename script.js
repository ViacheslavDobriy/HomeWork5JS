// Task 1

const numbers = {
    keyin1: 1,
    keyin2: 2,
    keyin3: 3,
    keyin4: 4,
    keyin5: 5,
    keyin6: 6,
    keyin7: 7
};

function findThreeAndMore (object) {
    for (const key in object) {
        if (object[key] >= 3) {
            console.log(`${key}: ${object[key]}`)
        }
    }
};

findThreeAndMore(numbers);

// Task 2

// TASk 3

const products = [
    {
        id: 3,
        price: 200
    },
    {
        id: 4,
        price: 900
    },
    {
        id:1,
        price: 1000
    }
];

function makeExpensive(array, extraCharge) {
    array.forEach(element => {
        
    });
}