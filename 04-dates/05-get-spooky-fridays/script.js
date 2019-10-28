/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

document.getElementById("run").addEventListener("click", function() {

function disp (txt) {
    console.log(txt);
}
function don_date_format(d1) {
    let m=new Array(13);
        m[1]="Janvier";
        m[2]="Février";
        m[3]="Mars";
        m[4]="Avril";
        m[5]="Mai";
        m[6]="Juin";
        m[7]="Juillet";
        m[8]="Août";
        m[9]="Septembre";
        m[10]="Octobre";
        m[11]="Novembre";
        m[12]="Décembre";

    let d=new Array(8);
        d[1]="Dimanche";
        d[2]="Lundi";
        d[3]="Mardi";
        d[4]="Mercredi";
        d[5]="Jeudi";
        d[6]="Vendredi";
        d[7]="Samedi";

    let mois=m[d1.getMonth()+1];
    let jour=d[d1.getDay()+1];
    let date=d1.getDate();
    let an=d1.getYear();
        if (an<200) an+=1900;
            date=jour+" "+date+" "+mois+" "+an;
            return date;
        }
function prochain() {
    let dt_jour=new Date;
    let an=dt_jour.getYear();
    if (an<200) an+=1900; 
    let m=dt_jour.getMonth();
    let d=dt_jour.getDate(); 
    if (d>13) m++;
    let ven="";
    while (ven=="") {
        dt_jour.setDate(13);
        dt_jour.setMonth(m);
        dt_jour.setYear(an);
        if (dt_jour.getDay()==5) {
            ven=don_date_format(dt_jour);
        }
        m++; 
        if (m==13) {m=0; an++;}
    }
    return ven;
}
function getVendredi() {
    let an=document.getElementById("year").value;
    let dt_jour=new Date;
    // let message= "Les vendredi 13 de l'année ";
    let message=unescape("Les vendredi 13 de l'année "+an+"%0D%0A");
    for(let i=0;i<12;i++) {
        dt_jour.setMonth(i);
        dt_jour.setDate(13);
        dt_jour.setYear(an);
            if (dt_jour.getDay()==5) {
                message+=" "+unescape(don_date_format(dt_jour)+"%0D%0A");
            }
        }
        alert(message);
    }

getVendredi();
disp("Le prochain vendredi 13 aura lieu le "+ prochain());
})
    /*
    function disp (txt) {
        console.log(txt);
    }
    function don_date_format(d1) {
        let m=new Array(13);
            m[1]="Janvier";
            m[2]="Février";
            m[3]="Mars";
            m[4]="Avril";
            m[5]="Mai";
            m[6]="Juin";
            m[7]="Juillet";
            m[8]="Août";
            m[9]="Septembre";
            m[10]="Octobre";
            m[11]="Novembre";
            m[12]="Décembre";

        let d=new Array(8);
            d[1]="Dimanche";
            d[2]="Lundi";
            d[3]="Mardi";
            d[4]="Mercredi";
            d[5]="Jeudi";
            d[6]="Vendredi";
            d[7]="Samedi";

        let mois=m[d1.getMonth()+1];
        let jour=d[d1.getDay()+1];
        let date=d1.getDate();
        let an=d1.getYear();
            if (an<200) an+=1900;
                date=jour+" "+date+" "+mois+" "+an;
                return date;
            }
    function prochain() {
        let dt_jour=new Date;
        let an=dt_jour.getYear();
        if (an<200) an+=1900; 
        let m=dt_jour.getMonth();
        let d=dt_jour.getDate(); 
        if (d>13) m++;
        let ven="";
        while (ven=="") {
            dt_jour.setDate(13);
            dt_jour.setMonth(m);
            dt_jour.setYear(an);
            if (dt_jour.getDay()==5) {
                ven=don_date_format(dt_jour);
            }
            m++; 
            if (m==13) {m=0; an++;}
        }
        return ven;
    }
    disp("Le prochain vendredi 13 aura lieu le "+ prochain());
*/




    // your code here
    /*
    function disp(txt) {document.write(txt);}
    function don_date_format(d1) {
            let m=new Array(13);
                m[1]="Janvier";
                m[2]="Février";
                m[3]="Mars";
                m[4]="Avril";
                m[5]="Mai";
                m[6]="Juin";
                m[7]="Juillet";
                m[8]="Août";
                m[9]="Septembre";
                m[10]="Octobre";
                m[11]="Novembre";
                m[12]="Décembre";

            let d=new Array(8);
                d[1]="Dimanche";
                d[2]="Lundi";
                d[3]="Mardi";
                d[4]="Mercredi";
                d[5]="Jeudi";
                d[6]="Vendredi";
                d[7]="Samedi";

            let mois=m[d1.getMonth()+1];
            let jour=d[d1.getDay()+1];
            let date=d1.getDate();
            let an=d1.getYear();
                if (an<200) an+=1900;
                    date=jour+" "+date+" "+mois+" "+an;
                    return date;
                }
    function prochain() {
            let dt_jour=new Date;
            let an=dt_jour.getYear();
                if (an<200) an+=1900;
                    let m=dt_jour.getMonth();
                    let d=dt_jour.getDate();
                        if (d>13) m++;
                            let ven="";
                while (ven=="") {
                    dt_jour.setDate(13);
                    dt_jour.setMonth(m);
                    dt_jour.setYear(an);
                        if (dt_jour.getDay()==5) {
                            ven=don_date_format(dt_jour);
                        }
                            m++;
                                if (m==13) {m=0; an++;}
                            }    return ven;
                        }
    function getVendredi() {
            let an=document.forms[0].elements[0].value
            let dt_jour=new Date;
            document.forms[0].elements[2].value=unescape("Les vendredi 13 de l'année "+an+"%0D%0A");
            for(let i=0;i<12;i++) {
                dt_jour.setMonth(i);
                dt_jour.setDate(13);
                dt_jour.setYear(an);
                    if (dt_jour.getDay()==5) {
                        document.forms[0].elements[2].value+=" "+unescape(don_date_format(dt_jour)+"%0D%0A");
                    }
                }}
})();
*/

// https://www.toutjavascript.com/main/script.php?url=vendredi13 
