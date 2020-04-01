// const dummyBtn = document.querySelector('#dummy');
// dummyBtn.addEventListener('click', dummy);


const pf = document.querySelectorAll('.production table input');
const hf = document.querySelectorAll('.hemm table input');
const of = document.querySelectorAll('.others table input');

const pfv = {};
const hfv = {};
const ofv = {};

const pc = {};
const hc = {};
const oc = {};




const f = document.querySelectorAll('input');
f.forEach(function (x) {
    x.addEventListener('change', calculate);
});


const pdf = document.querySelector('#pdate');
const hdf = document.querySelector('#hdate');
const odf = document.querySelector('#odate');

start();

function start() {
    const a = new Date();
    const b = a.toISOString();
    const c = b.slice(0, 10);
    console.log(c);
    pdf.value = c; 

    const n = date2number(pdf.value);
    console.log(n);
}



function date2number(dt) {


    const a = new Date(2018, 3, 1, 0, 6, 0, 0);
    const b = new Date(a);
    const c = a.getTime();


    const u = new Date(dt);
    
    const v = u.getTime();
    console.log(v);
    const w = Math.ceil((v - c) / (24 * 3600 * 1000))
    return w;

}

function calculate() {


    date2number();

    pf.forEach(x => {
        pfv[x.id] = +x.value;
    });

    hf.forEach(x => {
        hfv[x.id] = +x.value;
    });


    of.forEach(x => {
        ofv[x.id] = +x.value;
    });


    pc.coalsd = pfv.g8 + pfv.g10sd;
    pc.coalsm = pfv.g10sm;

    pc.totalcoal = pc.coalsd + pc.coalsm;

    pc.obsd = pfv.depteast + pfv.deptwest + pfv.deptcoal;
    pc.obdl = pfv.jwalasolid + pfv.vindhyasolid + pfv.jyotisolid + pfv.pawansolid;
    pc.dlreh = pfv.jwalareh + pfv.vindhyareh + pfv.jyotireh + pfv.pawanreh;

    pc.deptob = pc.obsd + pc.obdl;
    pc.outob = pfv.outeasttop + pfv.outwesttop + pfv.outeastmid + pfv.outwestmid + pfv.outeastdl + pfv.outwestdl;
    pc.totalob = pc.deptob + pc.outob;

    pc.silog8 = pfv.g8;
    pc.silog10 = pfv.totalsilo - pfv.g8;
    pc.totaldesp = pfv.totalsilo + pfv.wwg10 + pfv.roadg10;
    pc.netdesp = pc.totaldesp - pfv.rwwg10 - pfv.rchpg10;



    hc.dlah = hfv.dlavl;
    hc.dlwh = hfv.dlutl;
    hc.shvah = hfv.shvavl + hfv.shvutls;
    hc.shvwh = hfv.shvutl + hfv.shvutls;
    hc.d85ah = hfv.d85avl + hfv.d85utls;
    hc.d85wh = hfv.d85utl + hfv.d85utls;
    hc.d120ah = hfv.d120avl + hfv.d120utls;
    hc.d120wh = hfv.d120utl + hfv.d120utls;
    hc.dumperah = hfv.d85avl + hfv.d85utls + hfv.d120avl + hfv.d120utls;
    hc.dumperwh = hfv.d85utl + hfv.d85utls + hfv.d120utl + hfv.d120utls

    displayCalculated();
}

function displayCalculated() {

    for (x of Object.keys(pc)) {
        document.querySelector('#' + x).innerText = pc[x];
    }

    for (x of Object.keys(hc)) {
        document.querySelector('#' + x).innerText = hc[x];
    }
}




