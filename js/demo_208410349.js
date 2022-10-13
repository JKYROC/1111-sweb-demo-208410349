// alert("hi");
function change(index){

const p = document.querySelector('.show-classdemo');
    console.log('p' ,p);
    switch(index){
        case 1:
        p.innerHTML = '<iframe src="./demo/w01-208410349/index.html" width=100% height=100%/>'
        break;
        case 2:
        p.innerHTML = '<iframe src="./demo/w02-208410349/card.html" width=100% height=100%/>'
        break;
        case 3:
        p.innerHTML = '<iframe src="./demo/w04-208410349/blog_208410349.html" width=100% height=100%/>'
        break;
        case 4:
        p.innerHTML = '<iframe src="./demo/w06-208410349/blog_208410349.html" width=100% height=100%/>'
        break;
    }
}