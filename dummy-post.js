const char = `Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum.`.split(" ");

let  manth = "";                     let temp = new Array();

let rand_para = new String();

let rand_title = new String();

let image = new String();

let user = new String();

let title = new String();

let para = new String();

const posts = (len) => {

        for(let x=0;x<=len;x++){

                para = Math.floor(Math.random()*char.length);

                for(let y=0;y<=para;y++){

                        rand_para += char[Math.floor(Math.random()*char.length)]+" ";

                }

                title  = Math.floor(Math.random()*(40 - 30 + 1)+ 10);

                for(let z=0;z<=title;z++){

                        rand_title += char[Math.floor(Math.random()*char.length)]+" ";

                }

                image = `https://source.unsplash.com/random/${Math.floor(Math.random()*(300 - 200 + 1) + 200)}x160`;

                user = char[Math.floor(Math.random()*char.length)];

                manth = 'jan feb mar apr may jun jul aug sep oct nov dec'.split(" ")[Math.floor(Math.random()*12)];

                day = Math.floor(Math.random()*31);

                temp[x]= {

                        'desc':rand_para,

                        'title':rand_title,

                        'image':image,

                        'user':user,

                        'date':`${manth} ${day} ,2023 ${month}:${day}`

                }

                rand_title = "";

                rand_para = "";

        }

return temp;

}
