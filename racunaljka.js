if (advantageous === true) {
    var x;
    var inicijalnaAkcija = true;
    var currOps = this.innerHTML;
    console.log(currNumber); // ----> 7
    if (inicijalnaAkcija && prevOperation === '+' || prevOperation === '-') {
        currNumber = prevOperation + currNumber;
        x = currNumber;
        console.log(x);    // ----> -3
        inicijalnaAkcija = false;
    } else {
        switch (currOps) {
            case 'x':
                x = Number(result) * Number(currNumber);
                console.log(currNumber);  // -----> 2

                break;
                //result = result * currNumber;

        }
    }
    // if()
}
