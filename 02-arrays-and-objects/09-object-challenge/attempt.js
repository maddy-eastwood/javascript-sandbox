const library = [
    { 
        title: "Harry Potter and the Sorcerer's Stone",
        author: "J.K. Rowling",
        status: {
            own: true,
            reading: false,
            read: false,
        } 
    },
    {
        title: "Harry Potter and the Chamber of Secrets",
        author: "J.K. Rowling",
        status: {
            own: true,
            reading: false,
            read: false,
        } 
    },
    {
        title: "Harry Potter and the Prisoner of Azkaban",
        author: "J.K. Rowling",
        status: {
            own: true,
            reading: false,
            read: false,
        } 
    },
];

library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

const { title: firstBook } = library[0];
console.log(firstBook);

const libraryJSONString = JSON.stringify(library);
console.log(libraryJSONString);