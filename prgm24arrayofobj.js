weatherData=[
    {district:'Thrissur',weather:32},
    {district:'Kottayam',weather:29},
    {district:'Palakkad',weather:34},
    {district:'Ernakulam',weather:33},
    {district:'Thrissur',weather:29},
    {district:'Kottayam',weather:30},
    {district:'Palakkad',weather:32},
    {district:'Ernakulam',weather:31}
]
//print district with its highest temparature
//output: {Thrissur:32, Kottayam:30,Palakkad:34,Ernakulam:33}

wd={}

for(let data of weatherData){
    district=data.district

    currtemp=data.weather
    if(district in wd){
        oldtemp=wd[district]
        if(oldtemp>currtemp){
            wd[district]=oldtemp
        }
    }
    else{
        wd[district]=currtemp
    }
}
console.log(wd);
console.log(`.............................................`);


products=[
    {pid:100,pName:'apple',band:'5g',price:120000,display:'led'},
    {pid:101,pName:'samsaung',band:'5g',price:45000,display:'led'},
    {pid:102,pName:'blackberry',band:'4g',price:50000,display:'led'},
    {pid:103,pName:'nokia',band:'3g',price:1200,display:'lcd'},
    {pid:104,pName:'motorola',band:'4g',price:10000,display:'lcd'}
]

//1. print product name only

for(let item of products){
    console.log(item.pName);
}
console.log(`.......................................`);

products.map(data=>data['pName']).forEach(items=>console.log(items));
console.log(`.......................................`);

//2. print all mobile details whose display is lcd

for(let item of products){
    display=item.display
    if(display=='lcd'){
        console.log(item);
    }
}
console.log(`.......................................`);

products.filter(data=>data.display=='lcd').forEach(items=>console.log(items));
console.log(`.......................................`);

//3. print 5g mobile phone name

for(let item of products){
    band=item.band
    if(band=='5g'){
        console.log(item.pName);
    }
}
console.log(`.......................................`);

products.filter(data=>data.band=='5g').forEach(items=>console.log(items.pName));
console.log(`.......................................`)

//4. sort mobile based on price

products.sort((data1,data2)=>data1.price-data2.price).forEach(item=>console.log(item.pName));
console.log(`.......................................`);

//5. print costly mobile

costlyproduct=products.reduce((data1,data2)=>data1.price>data2.price?data1:data2)
console.log(costlyproduct.pName);
console.log(`.......................................`);

//6. print low cost mobile

lowcostproduct=products.reduce((data1,data2)=>data1.price<data2.price?data1:data2)
console.log(lowcostproduct.pName);
console.log(`.......................................`);