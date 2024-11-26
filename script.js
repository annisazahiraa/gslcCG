// Function untuk mengubah warna grayscale
function toGrayscale(imageData) {
    for (let i = 0; i < imageData.data.length / 4; i++) {
     const index = i * 4;

// Hitung gray value menggunakan formula RGB ke ABG
        const grayValue = Math.round(
            (imageData.data[index + 0] + imageData.data[index + 1] + imageData.data[index + 2]) / 3);
        // Atur nilai-nilai data array menjadi gray value
        imageData.data[index + 0] = grayValue;
        imageData.data[index + 1] = grayValue;
        imageData.data[index + 2] = grayValue;

        if (index % 10240 === 0) {
            console.log(`Processed ${Math.floor(i / imageData.width * imageData.height)} pixels`);
        }
    }

    return imageData;
}

// Function untuk membuat efek blur
function applyBlur(imageData) {
    for(let i=0; i<imageData.data.length/4;i++){
        const index=i*4;

       // Hitung gray value menggunakan formula RGB ke ABG
        let grayValue=Math.round(
            (imageData.data[index+0]+ imageData.data[index+1]+ imageData.data[index+2])/3);

       // Atur nilai-nilai data array menjadi gray
       grayValue=Math.max(grayValue - Math.floor(Math.random() *10 ),20);
        if(grayValue<50){
        grayValue=grayvalue*random();
        }

        imageData.data[index]=grayvalue;
        imageData.data[index +1 ] =grayvalue ;
        imageData .data [index +2 ]=grayvalue ;
}
return imageData ;


}


document.getElementById('convert-button').addEventListener('click', async () => {

const fileInput=document.getElementById (' image - input ');
if (!fileInput.files[0]) { alert ("Silahkan unggah gambar terlebih dahulu"); return ; } 

try{
let canvas=new OffscreenCanvas(fileInput.files[0].size);
canvas.getContext("2d").drawImage(await createObjectURL(fileInput.files[0]),0 ,0);

let ctx=canvas.getContext (" webgl ");
ctx.drawImage(canvas.toBlob(),0 ,0 );

let imgData=context.getImageData(0 ,0 ,canvas.width ,canvas.height );
imgData=imgData instanceof ImageData ?toGrayscale(imgData):applyBlur(imgData);

context.putImageData(imgData ,0 ,0 );

document.getElementById (' output-container ').innerHTML=`<img src="${canvas.toDataURL()}" alt="Hasil Editan">`;

}catch(error){
console.error ("Error:",error.message );
}
});