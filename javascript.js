var makanan = {
    produk: [{
            id: 1,
            harga: 10000,
            nama_mkn: 'gado-gado',
            img: 'https://joss.co.id/data/uploads/2019/03/gado-gado-makan-indonesia.jpg',
        },
        {
            id: 2,
            harga: 11000,
            nama_mkn: 'sate',
            img: 'https://muslimobsession.com/wp-content/uploads/2019/01/Sate-Ayam.jpg'
        },
        {
            id: 3,
            harga: 12000,
            nama_mkn: 'ikan lele goreng',
            img: 'https://i.ytimg.com/vi/RE02t1ZoVaM/maxresdefault.jpg'
        },
        {
            id: 4,
            harga: 13000,
            nama_mkn: 'nasi tumpang',
            img: 'https://img.okeinfo.net/content/2019/07/04/298/2074589/4-makanan-khas-indonesia-yang-paling-diburu-di-luar-negeri-gOjMyZizaf.jpg',
        },
        {
            id: 5,
            harga: 14000,
            nama_mkn: 'nasi pecel',
            img: 'https://merahputih.com/media/92/2a/3a/922a3a1812d92876bf563f4ba580eb07.jpg'
        },
        {
            id: 6,
            harga: 15000,
            nama_mkn: 'rendang sapi',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCnVn1MNXZskI_iynWp8eStno7dnFNfY-iXZmWU4badZsgvBN_&s',
        },
        {
            id: 7,
            harga: 10000,
            nama_mkn: 'bakso',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr9trEH6sHFr1ASMwe7-rUOJ0gdnxcAJJ-YJzh6SgcyKthpgNT&s'
        },
        {
            id: 8,
            harga: 9000,
            nama_mkn: 'soto ayam',
            img: 'https://sobatjogja.com/wp-content/uploads/2015/01/7-Makanan-Enak-di-Jogja-Yang-Ngangenin.jpg'
        },
        {
            id: 9,
            harga: 13000,
            nama_mkn: 'nasi orak arik',
            img: 'https://i1.wp.com/myfunfoodiary.com/wp-content/uploads/2016/10/Nasi-Goreng-Kekian-Babi-Koh-Dyam-Jogja-Yogya-by-Myfunfoodiary-1.jpg?w=584',
        },
        {
            id: 10,
            harga: 5000,
            nama_mkn: 'mie instan',
            img: 'https://akcdn.detik.net.id/community/media/visual/2019/11/11/b8ed8f67-791c-4e27-b9b3-b9d064176a08.jpeg',
        },
        {
            id: 11,
            harga: 15000,
            nama_mkn: 'nasi campur',
            img: 'https://www.nibble.id/wp-content/uploads/2016/05/restoran-di-muara-karang-01.jpg',
        },
        {
            id: 12,
            harga: 11000,
            nama_mkn: 'coto makassar',
            img: 'https://ngalam.co/wp-content/uploads/2018/01/2018_01_24_Penjual-Coto-Makassar-yang-Ada-di-Malang.jpg'
        },
        {
            id: 13,
            harga: 3000,
            nama_mkn: 'es teh',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyRbT3V3JS4Zru7aW0BcmkDmQkWSMIW_PmZPrlOssXaK1NI0-CSA&s'
        },
        {
            id: 14,
            harga: 4000,
            nama_mkn: 'es jeruk tumpang',
            img: 'https://assets-a1.kompasiana.com/statics/crawl/55686bc00423bd0c718b4567.jpeg',
        },
        {
            id: 15,
            harga: 6000,
            nama_mkn: 'es buah pecel',
            img: 'https://1.bp.blogspot.com/-CjagPu7jMSA/WjNM0NIJylI/AAAAAAAAAFE/oKloaj_Up_gGtIClr964G7ywKUR-ufxLgCLcBGAs/w585/images-8.jpg'
        },
        {
            id: 16,
            harga: 4500,
            nama_mkn: 'es dawet',
            img: 'https://www.wowkeren.com/display/images/photo/2019/01/02/00238092s4.jpg'
        },
        {
            id: 17,
            harga: 2500,
            nama_mkn: 'kopi',
            img: 'https://www.indonesiakaya.com/uploads/_images_gallery/1209_Umumnya_kedai_kopi_di_Aceh_menyajikan_Kopi_Hitam,_Kopi_Susu_dan_Sanger_(2).jpg'
        },
        {
            id: 18,
            harga: 5000,
            nama_mkn: ' herbal drink',
            img: 'https://asset.kompas.com/crops/g83s52EjEb7gxEE0fAF4ujEubKk=/0x0:1000x667/750x500/data/photo/2019/11/27/5dde7bfc69ba8.jpg'
        }

    ],
}
//menampilkan item

// list_prk:function(){
// list_prk()=>{
let list_prk = () => { //sama aja yg saya komen di atas
    makanan.produk.forEach(element => {
        let wadah = document.querySelector('#konten1');
        wadah.innerHTML += `
            <button class="btn_img" onclick="list_table(${element.id},${element.harga},'${element.nama_mkn}')">
                <img src="${element.img}" class="hr" alt="img">
                <p class="p_harga"><b>${element.nama_mkn}</b></p>
                <p class="p_nama">${element.harga}</p>
            </button>                
        `;
        // console.log(wadah);
    });
}

list_prk();
//menampilkan produk ke table
let list_table = (id, harga, makanan) => {

    const keranjang = document.querySelectorAll('#list tr');

    if (keranjang.length > 0) {
        let jika_hasilnya_sama = false;
        keranjang.forEach(card => {
            const idCard = card.getAttribute('id');
            let idTr = 'nilai-ke-' + id;

            if (idCard === idTr) {
                jika_hasilnya_sama = true;
            }
        });
        if (jika_hasilnya_sama == true) {

            let nilai_val = document.querySelector('#nilai-ke-' + id + ' #input').value;
            let hsl_val = Number(nilai_val) + 1;
            document.querySelector('#nilai-ke-' + id + ' #input').value = hsl_val;
            document.querySelector('#nilai-ke-' + id + ' .subtotal').innerHTML = hsl_val * harga;
            total();
            total_item();
        } else {
            //ketika belum ada
            cetak(id, harga, makanan);
        }
    } else {
        //ketika 0
        cetak(id, harga, makanan);
    }
}
//untuk mencetak itemnya
let cetak = (id, harga, makanan) => {
    let tbody = document.querySelector('#list');
    let tr = document.createElement('tr');
    tr.setAttribute('id', idHps = 'nilai-ke-' + id);
    const row = tbody.appendChild(tr);
    row.innerHTML += `
    <td>${makanan}</td> 
    <td>${harga}</td> 
    <td><input id='input' oninput="setInput(this,${id},${harga})" type="number" value="1" min="1" max="100" style="width:30px"></td>
    <td><label class='subtotal'> ${harga}</label></td>  
    <td><button onclick="hapus('${idHps}')">hps</button></td>     
    `;

    total();
    total_item();
}

let setInput = (ths, id, harga) => {
    let val = ths.value;
    let tot = val * harga;
    document.querySelector('#nilai-ke-' + id + ' .subtotal').innerHTML = tot;
    total();
    total_item();
}
let hapus = (idHps) => {
    let s = document.querySelector('tbody tr#' + idHps).remove();
    console.log(s);
    total();
    total_item();
}

let disk = document.querySelector('input#input_disk');
disk.addEventListener('onclick', function () {
    let hsl = disk.value;
    total(hsl);
})
let pjk = document.querySelector('input#input_pjk');
pjk.addEventListener('onclick', function () {
    let hsl = pjk.value;
    total(hsl)
})

let total = (nilai) => {
    let jml = 0;
    let subtotals = document.querySelectorAll('#list tr td label.subtotal');
    if (subtotals.length > 0) {
        subtotals.forEach((subtot) => {
            jml += Number(subtot.innerText);
        })
    }
    console.log(jml);
    document.querySelector('#tot').innerHTML = jml;
    document.querySelector('#disk').innerHTML = disk = jml * nilai / 100;
    document.querySelector('#pjk').innerHTML = pjk = jml * nilai / 100;
    document.querySelector('#payable').innerHTML = disk + pjk;
}
let total_item = () => {
    let jml = 0;
    let totItem = document.querySelectorAll('#list tr td #input');
    if (totItem.length > 0) {
        totItem.forEach((itemtot) => {
            jml += Number(itemtot.value);
        })
    }
    console.log(jml);
    document.querySelector('#item').innerHTML = jml;

}