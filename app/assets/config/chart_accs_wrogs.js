

    var chart = document.getElementById('chart_accs_wrongs');
    var ruler = document.createElement('div');
    ruler.classList.add('chart_ruler');
    ruler.classList.add('ydiv');

    for (var i=1;i<6;i++){
            //i*50
        var subruler = document.createElement('span');
        subruler.innerText = i*50 ;
        subruler.style="bottom:"+i*50 +'px;';
        ruler.appendChild(subruler);
    }



    chart.appendChild(ruler);
    var b_first_time = true;
     var list_year = document.getElementsByClassName("analy_information_year");
     for (var y = 0; y <list_year.length; y++) {
       console.log(list_year[y].getAttribute('data-temp'));
        var year = list_year[y]; 
         list_month = year.getElementsByClassName('analy_information_month');
         //dom year
         var ydiv = document.createElement('div');
         ydiv.classList.add("ydiv");

        var mm = 1;
        var m = 0; 
        for (; m < list_month.length; ) {
            
            // console.log('m '+ list_month[m].getAttribute('data-temp'));
            // m--;

            console.log(mm+ '  t  ' + list_month[m].getAttribute('data-temp'))
             var month = list_month[m]; 
             var accs=0;
             var wrongs=0;
             

            if (mm!=month.getAttribute('data-temp')){
                accs=0;
                wrongs=0;
            }else{
                m++;
                res = month.getElementsByClassName('analy_info_accs_wrongs');
                accs = res[0].getAttribute('data-temp');
                wrongs = res[1].getAttribute('data-temp');
            
            }
            

            
            //dom month
            var mdiv = document.createElement('div');
            mdiv.classList.add("mdiv");

            var daccs = document.createElement('div');
            daccs.classList.add('daccs');
            
            daccs.classList.add("tooltip");
            daccs.classList.add("expand");
            daccs.setAttribute("data-title",accs.toString());

            daccs.style.height = accs + 'px';
            
            var dwrongs = document.createElement('div');
            dwrongs.classList.add('dwrongs');
            dwrongs.style.height = wrongs + 'px';

            dwrongs.classList.add("tooltip");
            dwrongs.classList.add("expand");
            dwrongs.setAttribute("data-title",wrongs.toString());



            mdiv.appendChild(daccs);
            mdiv.appendChild(dwrongs);

            var numMonth = document.createElement('span');
            numMonth.classList.add("numMonth");
            numMonth.innerText = mm;//month.getAttribute('data-temp');
            mdiv.appendChild(numMonth);


            ydiv.appendChild(mdiv);

           mm++;
            if (mm==13) mm=1;
    //         ////
        }
        var numyear = document.createElement('span');
        numyear.classList.add("numyear");
        numyear.innerText = year.getAttribute('data-temp');
        ydiv.appendChild(numyear);
       chart.appendChild(ydiv);

        

    }

