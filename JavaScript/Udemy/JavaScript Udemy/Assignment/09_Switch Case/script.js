const language = 'chinese';

switch(language){
    case 'chinese':
    case 'mandarin':
        console.log('MOST number of native speakers!');
        break
    case 'spanish':
        console.log('2nd place in number of native speakers')
    case 'english':
        console.log('3rd place')
    case 'hindi' :
        console.log('Number 4')
    case 'arabic' :
        console.log('5th most spoken language')
    default :
        console.log('Great language too :D')
}