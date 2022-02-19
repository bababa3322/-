/*
このプロジェクトで主に使用する機能
- for loops
- addEventListener
- setAttribut
- getAttribut
- data-name
- document.querySelector
- creatElemnt
*/

document.addEventListener('DOMContentLoaded',() => {
    // カードの配列を作成
    const cardArray = [
        {
            name: 'fries',
            img: 'asdf.png'
        },
        {
            name: 'cheeseburger',
            img: 'dfd.png'
        },
        {
            name: 'ice-cream',
            img: 'fasd.png'
        },
        {
            name: 'pizza',
            img: 'ffa.png'
        },
        {
            name:'milkshake',
            img:'kok.png'
        },
        {
            name:'hotdog',
            img:'tako.png'
        },
        {
            name: 'fries',
            img: 'asdf.png'
        },
        {
            name: 'cheeseburger',
            img: 'dfd.png'
        },
        {
            name: 'ice-cream',
            img: 'fasd.png'
        },
        {
            name: 'pizza',
            img: 'ffa.png'
        },
        {
            name:'milkshake',
            img:'kok.png'
        },
        {
            name:'hotdog',
            img:'tako.png'
        },
        
    ]
    cardArray.sort(() => 0.5 - Math.random())

    //定数
    const grid = document.querySelector(".grid")
    const resultDisplay = document.querySelector('#result')

    //変数
    let cardsChosen = []
    let cardsChosenId = []
    let cardsWon = []
    //カードを並べるアクション（関数）
    function creatBoard(){
        for (let i = 0; i < cardArray.length; i++){
            const card = document.createElement('img')
            card.setAttribute('src','blank.png')
            card.setAttribute('data-id',i)
            grid.appendChild(card) //htmlのgridにcardを追加する
            card.addEventListener('click',flipCard) //クリックしたらflipcardファンクションをアクション
        }
    }
    creatBoard()

    //　カードをフリップするファンクション　（関数）
    function flipCard() {
        let cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].img)
        cardsChosenId.push(cardId)
        this.setAttribute('src',cardArray[cardId].img)
        if (cardsChosen.length === 2){
            setTimeout(checkForMatch,500)
        }
    }
    
    //カードが揃ったかチェックするファンクション（関数）
    function checkForMatch() {
        const cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]

        //　同じカードを選んだとき
        if (optionOneId === optionTwoId) {
            cards[optionTwoId].setAttribute('src','blank.png')
            cards[optionTwoId].setAttribute('src','blank.png')
            alert('You have clicked the same image!')
        }
        //カードがマッチした時
        else if (cardsChosen[0] === cardsChosen[1]) {
            alert('You found a match')
            cards[optionOneId].setAttribute('src','white.png')
            cards[optionTwoId].setAttribute('src','white.png')
            cards[optionOneId].removeEventListener('click',flipCard)
            cards[optionTwoId].removeEventListener('click',flipCard)
            cardsWon.push(cardsChosen)
        }
        //カードがマッチしなかった時
        else {
            cards[optionOneId].setAttribute('src','blank.png')
            cards[optionTwoId].setAttribute('src','blank.png')
            alert('sorry, try again')
        }

        //配列を空にする
        cardsChosen = []
        cardsChosenId = []

        //スコア表示
        resultDisplay.textContent = cardsWon.length

        //　ゲームクリア
        if (cardsWon.length === cardArray.length / 2) {
            resultDisplay.textContent = 'Congrats! You found them all!'
        }
    }
    
})