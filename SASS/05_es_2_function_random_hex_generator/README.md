Tramite una funzione creare un generatore di colori randomici in formato esadecimale.

La funzione si chiamerà random-hex() e dovrà ritornare una stringa del tipo: "#AA11FF"

Facendo dunque affidamento alla funzione nativa random() possiamo generare dei valori randomici, dovremmo poi controllare con un if se il valore è > di 9 per apporre le lettere da A ad F

Tramite il comando @return possiamo ritornare il valore generato dalla funzione.



Implementare un ciclo @while all'interno della funzione random-hex() per generare la stringa che dovrà essere composta da 3 coppie di valori per formare il formato HEX. Usare la funzione nativa unquote() per ritornare il valore finale da random-hex(). Creare una griglia bootstrap di 12 colonne ed assegnare ad ogni colonna un colore di sfondo generato randomicamente con un ciclo while dedicato. Ogni colonna dovrà avere la classe .col.