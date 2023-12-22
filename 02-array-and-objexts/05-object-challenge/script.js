const library = [
    {
        title: "JS",
        author: "CS",
        status: {
            own: true,
            reading: false,
            read: false
        }
    },
    {
        title: "JS",
        author: "CS",
        status: {
            own: true,
            reading: false,
            read: false
        }
    },
    {
        title: "JS",
        author: "CS",
        status: {
            own: true,
            reading: false,
            read: false
        }
    }
];

const {title: firstBook} = library[0];

console.log(firstBook);

const libraryJSON = JSON.stringify(library);

console.log(libraryJSON);