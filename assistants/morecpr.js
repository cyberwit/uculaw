function makeList() {
    // Establish the array which acts as a data source for the list
    let listData = [
        '',

        ''
        
    ],
    // Make a container element for the list
    listContainer = document.createElement('div'),
    // Make the list
    listElement = document.createElement('ul'),
    // Set up a loop that goes through the items in listItems one at a time
    numberOfListItems = listData.length,
    listItem,
    i;

    // Add it to the page
    document.getElementsByTagName('morecpr')[0].appendChild(listContainer);
    listContainer.appendChild(listElement);

    for (i = 0; i < numberOfListItems; ++i) {
        // create an item for each one
        listItem = document.createElement('li');

        // Add the item text
        listItem.innerHTML = listData[i];

        // Add listItem to the listElement
        listElement.appendChild(listItem);
    }
}

// Usage
makeList();