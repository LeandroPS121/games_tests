function showMarkers(){
    let r_markers = document.querySelectorAll('.r_markers')
    r_markers.forEach(element => {
        if (element.style.display == 'none'){
            element.style.display = 'block'
        } else {
            element.style.display = 'none'
        }
    })
}
 
function hideMarkers(){
    let r_markers = document.querySelectorAll('.r_markers')
    r_markers.forEach(element => {
        element.style.display = 'none'
    })
}
