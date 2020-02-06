class Card {
    constructor(name, src) {
        this.name = name;
        this.src = src;
        this.container = document.getElementById("container");

        let card = this.constructCard();
        this.container.appendChild(card);
;    }

    constructCard() {
        let card = this.createCard();
        let title = this.createTitle();
        let image = this.createImage();
        let attributes = this.createAttributeList();

        card.appendChild(title);
        card.appendChild(image);
        card.appendChild(attributes);

        return card;
    }

    createCard() {
        let card = document.createElement('div');
        card.classList.add('card');

        return card;
    }

    createTitle() {
        let title = document.createElement('h1');
        let text = document.createTextNode(this.name);

        title.appendChild(text);

        title.classList.add('title');

        return title;
    }

    createImage() {
        let image = document.createElement('img');
        image.classList.add('image');

        image.src = this.src;

        return image;
    }

    createAttributeList() {
        let container = document.createElement('div');
        let list = document.createElement('ul');

        container.classList.add('listContainer');
        container.appendChild(list);

        for (let i = 0; i < 5; i++) {
            let listItem = document.createElement('li');
            let attributeText = document.createTextNode('attribute');

            listItem.appendChild(attributeText);
            list.appendChild(listItem);
        }
        
        return container;

    }
}

let arr = ["Jason Potter", "Ron", "Dumbledor", "Hermione", "Hedwig", "Dobby"]

/*
for (let i = 0; i < arr.length; i++) {
    let card = new Card(arr[i]);
}
*/

let card = new Card("Danny", "https://images.unsplash.com/photo-1580155955068-a992051f6afe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60");

/*
let thing = new Card("Dean");
let thing2 = new Card("Danny");
thing.createAttributeList()
*/