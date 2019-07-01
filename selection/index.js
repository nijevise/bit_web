function selection(start, end){
    document.write('<select>')
    for(var i = start; i < end; i++){
        document.write('<option>' + i + '</option>')
    }
    document.write('</select>')
}

selection(2000, 2019);
selection(1, 100);