const url = 'https://purpleschool.ru/course/javascript';

function spliturl(url) {
   const [protocol, _, host, ...path] = url.split('/');
   if (protocol === 'https:' || protocol === 'http:') {
    console.log(protocol, _, host, path)
    console.log(`Протокол: ${protocol.split(':')[0]}`);
    console.log(`Домен: ${host}`);
    console.log(`Путь: ${path.join('/')}`);
   }
   else {
    return false;
   }
   
}

spliturl(url)