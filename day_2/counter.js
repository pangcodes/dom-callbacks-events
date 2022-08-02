function makeButtonsWork() {

    let count = 0;

    const value = document.getElementById('value');
    const buttons = document.querySelectorAll(".btn");
    
    
    function handleClick(e) {
        const styles = e.currentTarget.classList;
        let style = styles[1];
    
        // if (styles.contains("decrease")) {
        //     // count -= 1
        //     count--;
        // } else if (styles.contains("increase")) {
        //     // count += 1
        //     count++;
        // } else {
        //     count = 0;
        // }
    
        // Same as above but using a switch statement
        switch(style) {
            case "decrease":
                count--;
                break;
            case "increase":
                count++;
                break;
            default:
                count = 0;
        }
    
        if (count > 0) {
            value.style.color = 'green';
        } 
        if (count < 0) {
            value.style.color = 'red';
        }
        if (count === 0) {
            value.style.color = 'black';
        }
    
        value.textContent = count;
    }
    
    buttons.forEach(function (btn) {
        //btn.addEventListener('click', ({currentTarget: {classList}})=> console.log(classList))

        btn.addEventListener('click', handleClick);

        // this will work too 
        // btn.addEventListener('click', (e) => handleClick(e)); 

        // this wont work
        // btn.addEventListener('click', handleClick(e)); 
    });

}


makeButtonsWork();