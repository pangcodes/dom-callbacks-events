/*
Exercise 1: highlight all of the words over 7 characters long in the paragraph text (with a yellow background)
*/

const paragraph = document.querySelector('p');
paragraph.innerHTML = paragraph.innerText
    .split(' ')
    .map(word => word.length > 7 ? `<span style="background-color: lemonChiffon">${word}</span>` : word)
    .join(' ');

/*
Add a link after the paragraph tag to the source of the paragraph.
*/

const link = document.createElement('a');
{/* <a href> </a> */}

// Both ways work :)
// link.href = 'https://www.bobrosslipsum.com/';
link.setAttribute('href', 'https://www.bobrosslipsum.com/');
link.textContent = 'Text generated from Bob Ross Lipsum';
document.body.appendChild(link);


/*
Split each new sentence on to a separate line in the paragraph text.
A sentence can be assumed to be a string of text terminated with a period.
*/

paragraph.innerHTML = paragraph.innerHTML.split('.').join('.</p><p>' + '</p>');

