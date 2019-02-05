# KOKO FOTO

Manipuler dine foto med koko algoritmer!

## Kjør opp lokalt

fra rot kjør:

`npm start`

Øverst på siden vil du finne en input. Her kan du paste inn en lenke til ett bilde ( eller skrive inn ansattIden din i Bekk.  Prøv for eksempel 849, eller finn en annen sin her `https://ansatt.bekk.no/ansatt/849`

Trykk så på download image for å hente dette. Prøv enten `halloween` eller `reduce`og se effekten.


## Skriv din egen `kokofoto™` algoritme

La oss skrive en skal skrive en algoritme som tar ett bilde og gjør hvert oddetall pixel til hvit farge.

Det første vi gjør er å lage knappen. åpne `App.tsx`.
I filen legg til:

```jsx
        <section className='middle'>
          <input type="text" onChange={this.handleChange} />
          <button onClick={() => downloadImage(this.state.id)}>last ned bilde</button>
          <button onClick={() => convert('original', 'result', mergeImage)}>reduce</button>
          <button onClick={() => convert('original', 'result', invertImage)}>Halloween</button>
          '''

           <button onClick={() => convert('original', 'result', whitenImage)}>Gjør hvitere</button>


           '''
        </section>
```

Husk å importere algoritmen øverst i filen:

```javascript
import { invertImage, mergeImage, whitening } from './Algorithms'
```

Gå så til filen `Algorithms/index.ts` og legg til:

```javascript
export * from './whitening';
```

Deretter oppretter du filen `whitening.ts` i `Algorithms` folderen.
(Angrer på at jeg valgte whitening)
I filen du akkurat opprettet skriver du:

```jsx
import { Cell } from '../Cell'

export function whitenImage(image: ImageData) {

    for (var i = 0; i < image.data.length; i += 4) {
        image.data[i] = 255; // Red
        image.data[i + 1] = 255; //Green
        image.data[i + 2] = 0;  //Blue
    }

}
```

Her tar funksjonen `WhitenImage` inn en liste som representerer pikslene i ett bilde.

Hold deg litt fast nå: En piksel i bildet representeres med RGBA(Red Green Blue Alpha). 
Fire oppføringer i listen tilsvarer en piksel.  
Der hver av disse er en ny oppføring i listen. For å hente ut fargen til den første pikselen må du hente ut de fire første oppføringene

```
Red = array[0]
Green = array[1]
Blue = array[2]
alpha = array[3] //Gjennomsiktighet

```  

Sjekk ut forskjellige rgba kombinasjoner på denne ikke så gøyale nettsiden:
`https://www.css3maker.com/css-3-rgba.html`

Si at vi har ett kjempe teit og lite bilde som kun består av 3 piksler. Første piksel er gul, andre er grønn og tredje er lilla. Listen vil da se slik ut:

```
    [255, 255, 0, 100, 0, 128, 0, 100, 128, 0, 128, 100]
     255, 255, 0, 100 representerer RGBA(255, 255, 0, 100) i første piksel og gir gul farge
     0, 128, 0, 100 representerer RGB i andre piksel og gir grønn farge
     128, 0, 128, 100 representerer RGB i tredje piksel og gir en lilla farge
    
```

