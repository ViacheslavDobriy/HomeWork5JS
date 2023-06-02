// TASK 1

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

// TASK 2

const post = {
    author: "John", // вывести этот текст
    postId: 23,
    comments: [
        {
            userId: 10,
            userName: "Alex",
            text: "lorem ipsum",
            rating: {
                likes: 10,
                dislikes: 2, // вывести это число
            },
        },
        {
            userId: 5, // вывести это число
            userName: "Jane",
            text: "lorem ipsum 2", // вывести этот текст
            rating: {
                likes: 3,
                dislikes: 1,
            },
        },
    ],
};

console.log(post.author);
console.log(post.comments[0].rating.dislikes);
console.log(post.comments[1].userId);
console.log(post.comments[1].text);

// TASk 3

const products3 = [
    {
        id: 3,
        price: 200
    },
    {
        id: 4,
        price: 900
    },
    {
        id: 1,
        price: 1000
    }
];

function applyDiscount(array, discount) {
    array.forEach(element => {
        for (const key in element) {
            if (key == "price") {
                element[key] *= 1 - discount;
            }
        }
    });
}
console.log(products3);
applyDiscount(products3, 0.15);
console.log(products3);

// TASK 4

const products4 = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ],
    },
    {
        id: 5,
        price: 499,
        photos: [],
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg",
        ],
    },
    {
        id: 8,
        price: 78,
    },
];

/**
 * Булевая функция, которая проверяет наличие свойства photos в объекте,
 *  а также наличие хотя бы одного элемента в этом свойстве
 * @param {*} object - принимаемый объект products 
 * @returns возвращает true если условие удовлетворено,
 *  и false если не было найдено свойство photos или если это свойство пустое
 */
function doHavePhotos(object) {
    for (const key in object) {
        if (key == 'photos' && object[key].length > 0) {
            return true;
        }
    }
    return false;
}

const filteredProductsByImage = products4.filter(doHavePhotos);
console.log(filteredProductsByImage);

/**
 * Функция сравнивает два объекта исключительно по свойству price
 * @param {*} objectA 1ый объект
 * @param {*} objectB 2ой объект
 * @returns возвращает 1 или -1 в зависимости от необходимой сортировки,
 *  в данном случае представлена сортировка по возрастанию цены
 */
function comparePrices(objectA, objectB) {
    for (const key in objectA) {
        if (key == 'price') {
            if (objectA[key] > objectB[key]) {
                return 1;
            } else {
                return -1;
            }
        }
    }
}

const sortedProductsByPrice = products4.sort(comparePrices);
console.log(sortedProductsByPrice);

// TASK 5

const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const ru = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];

function arraysToObject(arr1, arr2) {
    const resultObject = {};
    for (let i = 0; i < arr1.length; i++) {
        resultObject[arr1[i]] = arr2[i];
    }
    return resultObject;
}

console.log(arraysToObject(en, ru));