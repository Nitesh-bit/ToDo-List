
//module.exports = getDate;

//if there are more modules then


//There are different ways for shortening the code

//1.
exports.getDate = () => {
    const today= new Date();
        
        const objects = {
            day: "numeric",
            month: "long",
            weekday: "long"
        }
    
        const day= today.toLocaleDateString("en-US", objects);
        return day;
    }

//2.
// exports.getDate = function(){
//     let today= new Date();
        
//         let objects = {
//             day: "numeric",
//             month: "long",
//             weekday: "long"
//         }
    
//         let day= today.toLocaleDateString("en-US", objects);
//         return day;
//     }


//3.
// module.exports.getDate = function(){
//     let today= new Date();
        
//         let objects = {
//             day: "numeric",
//             month: "long",
//             weekday: "long"
//         }
    
//         let day= today.toLocaleDateString("en-US", objects);
//         return day;
//     }

//4.
// function getDate(){
// let today= new Date();
    
//     let objects = {
//         day: "numeric",
//         month: "long",
//         weekday: "long"
//     }

//     let day= today.toLocaleDateString("en-US", objects);
//     return day;
// }

module.exports.getDay = getDay;

function getDay(){
let today= new Date();
    
    let objects = {
        weekday: "long"
    }

    let day= today.toLocaleDateString("en-US", objects);
    return day;
}