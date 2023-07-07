Vogliamo applicare una classe che permetta l'animazione dell'elemento, l'effetto dovrà fare "saltellare" l'elemento html.
La classe si chiamerà .bounce ed avrà una durata di animazione di 1s.

Tramite mixin dovremmo creare una animazione di nome "bounce".

Nella mixin dovremmo parametrizzare la partenza della traslazione e la distanza con cui l'elemento dovrà traslare sull'asse Y nei vari frames.

Dunque la mixin avrà 2 valori di default nei parametri:
- partenza traslazione
- distanza traslazione

Come possiamo vedere nell'esempio che segue abbiamo intercettato che si parte da 0 e si arriva a massimo -30px (quando si trova al 40% dell'animazione)
Nel momento in cui si è al 60% bisogna assegnare la metà della distanza di traslazione parametrizzata.
Ad esempio se al 40% abbiamo -30px al 60% dovremmo avere -30px/2