function loadingBar(input) {
    
    let loaded = '%'.repeat(input / 10);
    let remain = '.'.repeat((100 - input) / 10);
    if (input == 100) {
        console.log('100% Complete!');
        console.log('[%%%%%%%%%%]'); 
    } else {
        console.log(`${input}% [${loaded}${remain}]`);
        console.log('Still loading...');
    }   
}
loadingBar(100)