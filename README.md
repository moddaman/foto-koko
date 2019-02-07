# KOKO FOTO

Manipuler dine foto med koko algoritmer!

## Kjør opp lokalt

fra rot kjør:

`npm start`

Øverst på siden vil du finne en input. Her kan du paste inn en lenke til ett bilde ( eller skrive inn ansattIden din i Bekk.  Prøv for eksempel 849, eller finn en annen sin her `https://ansatt.bekk.no/ansatt/849` 

Trykk så på download image for å hente dette. Prøv enten `halloween` eller `reduce`og se effekten.


## Skriv din egen `kokofoto™` algoritme

Åpne filen `src/Algorithms/your-algorithm.ts`.

Foreløpig setter den alle pikslene til en fargen som RGBA(224, 221, 123, 255) gir.

Prøv å endre på disse verdiene og se hvordan bildet endrer seg.


For eksempel vil algoritmen under bare kopiere bildet:

```

        image.data[i] =  image.data[i]; // Red 
        image.data[i + 1] = image.data[i + 1]; // Green
        image.data[i + 2] = image.data[i + 2]; // Blue
        image.data[i + 3] = image.data[i + 3]; //Alpha AKA Gjennomsiktighet
```


## Hvordan fungerer det

Hold deg litt fast nå: En piksel i bildet representeres med RGBA(Red Green Blue Alpha). Alpha er gjennomsiktihet til pikselen.
Fire oppføringer i listen tilsvarer en piksel.  
Der hver av disse er en ny oppføring i listen. For å hente ut fargen til den første pikselen må du hente ut de fire første oppføringene

```
Red = array[0]
Green = array[1]
Blue = array[2]
Alpha = array[3] 

```  

Sjekk ut forskjellige rgba kombinasjoner på denne ikke så gøyale nettsiden:
`https://www.colorspire.com/rgb-color-wheel/`

Si at vi har ett kjempe teit og lite bilde som kun består av 3 piksler. Første piksel er gul, andre er grønn og tredje er lilla. Listen vil da se slik ut:

```
    [255, 255, 0, 255, 0, 128, 0, 255, 128, 0, 128, 255]

     255, 255, 0, 100 representerer RGBA(255, 255, 0, 255) i første piksel og gir gul farge
     0, 128, 0, 255 representerer RGBa i andre piksel og gir grønn farge
     128, 0, 128, 255 representerer RGBA i tredje piksel og gir en lilla farge
    
```

