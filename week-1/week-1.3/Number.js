function explainParseInt(value){
    console.log("Original Value:", value);
    let result = parseInt(value);
    console.log("After parseInt:", result);
}

explainParseInt("42");
explainParseInt("42px"); // only take string start with number else return NaN
explainParseInt("3.14");

function explainParseFloat(value){
    console.log("Original Value:", value);
    let result = parseFloat(value);
    console.log("After parseFloat:", result);
}

explainParseFloat("3.14");
explainParseFloat("42");
explainParseFloat("42px");