window.onload = function() {   
    const divParent = document.getElementById('parent');                        
    const myTable = document.createElement('table');
    for (let i = 0; i <= 9; i++) {
        const myRow = myTable.insertRow(i);        
        for (let j = 0; j <= 9; j++) {
            const myCell = myRow.insertCell(j);  
            i === 0 ? myCell.innerHTML = j + 1 : myCell.innerHTML = i * 10 + j + 1; 
            myCell.setAttribute('style', 'border: 1px solid black; width: 50px; height: 50px; text-align: center;');                               
        }
    }
    myTable.style.border = '1px solid black';    
    divParent.appendChild(myTable);       
};    