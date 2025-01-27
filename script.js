const input = document.querySelector('input')
const btn = document.querySelector('button')
const dictionaryArea = document.querySelector('.dictionary-app')





// https://api.dictionaryapi.dev/api/v2/entries/en/<word>



async function dictionaryFn(word){
    const res = await fetch('https://api.dictionaryapi.dev/api/v2/entries/en/${<word}')
.then(res => res.json())

return res[0]
}


btn.addEventListener('click', fetchCreateCard)



async function fetchandCreateCard(){
    const data = await dictionaryFn(input.value)

    console.log(data)
}
let partOfSpeechArray = []

for(let i=0 ; i<data.meanings.lenght-1 ;  i++){
    partOfSpeechArray.push(data.meanings[i].partOfSpeech)
}


dictionaryArea.innerHTML = 
<div class="card">
                <div class="property">
                    <span>Word:</span>
                    <span>${data.word}</span>
                </div>

                <div class="property">
                    <span>Phonetics:</span>
                    <span>${data.word}</span>
                </div>


                <div class="property">
                    <span>
                        <audio controls src="${data.phonetics[0].audio}"></audio>
                    </span>
                </div>
                <div class="property">
                    <span>Definition:</span>
                    <span>Definition will go here:</span>
                </div>

                <div class="property">
                    <span>Example:</span>
                    <span>${data.meanings[1].definitions[0].example}</span>
                </div>

                div class="property">
                    <span>${partOfSpeechArray.map(e => e).join(',')}</span>
                </div>
             </div>

            