function downloadPDF(){
    const element = document.querySelector('.container-lg')

    const opt = {
    margin: 0,
    filename: 'Hoja_de_vida_DANIEL_GALVEZ.pdf',
    image: { type: 'jpeg', quality:1},
    html2canvas: {scale:2, useCors:true},
    jsPDF: {unit:'in',format:'letter',orientation:'portrait'}
};
html2pdf().set(opt).from(element).save();
}