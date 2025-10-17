let exampleProduct = {
    items: ['Coffee', 'Donut'],
    producer : '신사임당'
};

function displayProduct(obj){
    let {items, producer} = obj;

    console.log('items:', items);       // items: [ 'Coffee', 'Donut' ]
    console.log('producer:', producer); // producer: 신사임당

    console.log(items === obj.items);
    producer = 'asd';
};

/* 객체를 자동 으로 객체 구조 분해 할당이 됨 */
function displayProduct2({producer, items, brnad = '엔코아'}){
    console.log('items:', items);       // items: [ 'Coffee', 'Donut' ]
    console.log('producer:', producer); // producer: 신사임당
    console.log('brand:', brnad);       // brand: 엔코아
    producer = 'Kang';
};


displayProduct(exampleProduct);
displayProduct2(exampleProduct);
console.log(exampleProduct);


